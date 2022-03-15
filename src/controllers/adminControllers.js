
const session = require('express-session');
let { validationResult } = require('express-validator');

let fs = require('fs')
let path = require('path');
const { nextTick } = require('process');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models')
const Products = db.Product
const Categories = db.Categorie
const Descriptions = db.Description
const Opinions = db.Opinion
const Users = db.User
const Rol = db.Rol
<<<<<<< HEAD
=======


>>>>>>> entrega


let controllerProducts = {
   home:(req, res) =>{
        res.render('admin/adminHome',{
            session: req.session
        })
    }, 
    allProducts: (req, res) => {
        Products.findAll({
            include : [{association : "category"}]
        }
        )
        .then(products =>{
            res.render('admin/allProducts', {
                products,
                toThousand
            })
        })
        
    },

    allCategory: (req, res) => {
        Categories.findAll()
        .then((categories) =>{
            res.render('admin/allCategorys',{
                categories
            })
        })
        
    },

    create: (req, res) => {
        let allCategories = Categories.findAll();
        Promise.all([allCategories])
        .then(([categories]) => {
            res.render('admin/products', {
                categories,
                session: req.session 
            })   
        })
    },

    add: (req, res) => {
        Categories.findAll()
        .then((categories)=>{
            res.render('admin/addProducts',{
                fileValidator : req.fileValidationError,
                categories
            })
        })
        
    },

    store: (req, res) =>{
        let errors = validationResult(req)


        if (errors.isEmpty() && !req.fileValidationError) {
            
            let { name, category, price, color, stock, description, location,substratum, flowering } = req.body
            Descriptions.create({
                description,
                substratum,
                flowering,
                location
            })
            .then((descripcionProduct)=>{
                Products.create({
                    name,
                    price,
                    color: color ? color : null,
                    stock,
                    images : req.file ? req.file.filename : "default-image.png",
                    id_category : category,
                    id_description : descripcionProduct.id

                })
                .then((product) =>{
                    
                    Opinions.create({
                        content : "Sin comentarios",
                        stars : 0,
                        id_product : product.id 
                    })
                    .then(()=>{
                        res.redirect("/admin/list-product")
                    })
                    
                })
                .catch(errors => {res.send(errors)})
            })
        } else{
            Categories.findAll()
            .then((categories)=>{
                res.render('admin/addProducts',{
                    errors : errors.mapped(),
                    old : req.body,
                    fileValidator : req.fileValidationError,
                    categories
                })
            })
        }
    },
    
    edit: (req, res) =>{

        let oneProduct = Products.findByPk(req.params.id,{
            include :[{ association : "category"}, {association : "description"}]
        })
        let allCategories = Categories.findAll()
        Promise.all([oneProduct, allCategories])
        .then(([product, categories]) =>{

            res.render('admin/editProduct', {
                product,
                categories,
                fileValidator : req.fileValidationError,
                description : product.description
            })
        })
    },

    update: (req, res) =>{

        let errors = validationResult(req);
        
        if (errors.isEmpty() && !req.fileValidationError) {
            let { name, category, price, color, stock, description, location,substratum, flowering } = req.body
            Products.findByPk(req.params.id)
            .then((product)=>{
                if(req.file){
                    if (fs.existsSync('./public/images/products/' + product.images) && product.images !== "default-image.png") {
                        fs.unlinkSync(`./public/images/products/${product.images}`)
                    } else {
                        console.log('no se encontro el archivo')
                    }
                }
                if (product.id_description != 1) {
                    let updateProduct = Products.update({ name, price, color: color ? color : null, stock, images : req.file ? req.file.filename : product.image,
                         id_category : category
                    },{
                        where : {id : req.params.id}
                    })
                    let updateDescription = Descriptions.update({ description, location, substratum, flowering
                        },{
                        where : { id : product.id_description}
                        })

                    Promise.all([updateProduct, updateDescription])
                    .then((result) =>{
                        res.redirect("/admin/list-product")
                    })
                    .catch(errors => {res.send(errors)})

                } else{
                    Descriptions.create({
                        description,
                        substratum,
                        flowering,
                        location
                    })
                    .then((descripcionProduct)=>{
                        Products.update({
                            name,
                            price,
                            color: color ? color : null,
                            stock,
                            images : req.file ? req.file.filename : product.image,
                            id_category : category,
                            id_description : descripcionProduct.id
        
                        },{
                            where : {id : req.params.id}
                        })
                        .then((result) =>{
                            res.redirect("/admin/list-product")
                        })
                        .catch(errors => {res.send(errors)})
                    })
                    .catch(errors => {res.send(errors)})
                }
            })
    
        } else {
            let oneProduct = Products.findByPk(req.params.id,{
                include :[{ association : "category"}]
            })
            let allCategories = Categories.findAll()
            Promise.all([oneProduct, allCategories])
            .then(([product, categories]) =>{
                res.render('admin/editProduct', {
                    product,
                    categories,
                    description : product.description,
                    fileValidator : req.fileValidationError,
                    old : req.body,
                    
                    errors : errors.mapped()
                })
            })
        }
    },
    delete: (req,res) =>{
            Products.findByPk(req.params.id)
            .then((product) =>{
                // if (fs.existsSync('./public/images/products/' + product.images) && product.images !== "default-image.png") {
                //     fs.unlinkSync(`./public/images/products/${product.images}`)
                // } else {
                //     console.log('no se encontro el archivo')
                // }
                

                Opinions.destroy({where : { id_product : req.params.id}})

                .then((result)=>{              

                    let deleteProduct = Products.destroy({ where : { id : req.params.id }})
                    let deleteDescription = Descriptions.destroy({ where : { id : product.id_description }})
                    Promise.all([deleteProduct,deleteDescription])
                    .then(() =>{
                        if (fs.existsSync('./public/images/products/' + product.images) && product.images !== "default-image.png") {
                            fs.unlinkSync(`./public/images/products/${product.images}`)
                        } else {
                            console.log('no se encontro el archivo')
                        }
                        res.redirect('/admin/list-product')
                    })
                    .catch(errors => res.send(errors))
                })
                .catch(errors => res.send(errors))
                
                
            })
            .catch(errors => res.send(errors))
        
    },
<<<<<<< HEAD
=======

>>>>>>> entrega
}
let controllerUsers = {
    home:(req, res) =>{
        res.render('admin/adminHome',{
            session: req.session
        })
    }, 
     
    index: (req, res) => {
        Users.findAll(
        )
        .then(Users =>{
            res.render('admin/indexUser', {
                Users,
                toThousand
                
                
            })
        })
        
    },
     
      permission: async(req, res) => { 
       
        const {id, rol} = req.body;
        

        try {

           let user = await Users.findByPk(id);
           
           await Users.update(
               {
                   id_rol : +rol === 1 ? 2 : 1
               },
               {
                   where : {id}
               }
           )
           user = await Users.findByPk(id)
           return res.json({
               ok : true,
               data : user
           })
           

        }catch (error) {
           console.log(error)
        }

  },
        update: (req, res) => {
            Users.update({
                id_roles: req.body.rol,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/indexUser' + req.params.id)
        },
         delete: (req, res) => {
             db.User.destroy({
                 where: {
                     id: req.params.id
                 }
             })
             res.redirect('/');
         }
}
  

module.exports = {controllerProducts, controllerUsers}
