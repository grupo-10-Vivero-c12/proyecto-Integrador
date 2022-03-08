
const session = require('express-session');
let { validationResult } = require('express-validator');

let fs = require('fs')
let path = require('path')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const db = require('../database/models')
const Products = db.Product
const Categories = db.Categorie
const Descriptions = db.Description
const Opinions = db.Opinion




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

}



let controllerUsers = {
      create: function (req, res) {
        db.Rol.findAll()
        .then(function(rol) {
          return res.render('/admin/allUsuarios', {rol:rol});
        })
      },
      save: function (req, res) {
          db.User.create({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              avatar: req.body.avatar,
              adress: req.body.adress,
              phone: req.body.phone,
              cp: req.body.cp,
              province: req.body.province,
              country: req.body.country,
              date_birth: req.body.date_birth,
              age: req.body.age,
              id_roles: req.body.rol,
          });
          res.redirect('/admin')
      },
      index: function(req, res) {
         db.User.findAll(users)
         .then (function(){
             res.render('/admin/indexUser', {users: users});
         })
      },
      detail: function(req, res) {
          db.User.findByPk(req.params.id, {
           include: [{association: 'rol'}]
          
        })
          .then(function(user) {
              res.render('/admin/userDetail', {user:user});
          })
      },
      edit: function(req, res) {
          let pedidoUser = db.User.findByPk(req.params.id);
     
          let pedidoRoles = db.Rol.findAll();

          Promise.all([pedidoUser, pedidoRoles])
            .then(function(users, rol) {
            res.render('/admin/editUser', {users:users, rol:rol});
            })
        },
        update: function(req, res) {
            db.User.update({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
                adress: req.body.adress,
                phone: req.body.phone,
                cp: req.body.cp,
                province: req.body.province,
                country: req.body.country,
                date_birth: req.body.date_birth,
                age: req.body.age,
                id_roles: req.body.rol,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/users' + req.params.id)
        },
         delete: function(req, res) {
             db.User.destroy({
                 where: {
                     id: req.params.id
                 }
             })
             res.redirect('/admin/users');
         }
}

module.exports = {controllerProducts, controllerUsers}
