let {productos, writeJson, users, writeUsersJson} = require('../data/dataBase.js')
let { validationResult } = require('express-validator')
let fs = require('fs')
let path = require('path')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const db = require('../database/models')
const Products = db.Product
const Categories = db.Categorie



let controller = {
   home:(req, res) =>{
        res.render('admin/adminHome',{
            session: req.session
        })
    }, 
    allProducts: (req, res) => {
        Products.findAll({
            include : [{association : "category"}]
        })
        .then((products) =>{
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
            
            let { name, category, price, color, stock, images } = req.body
            Products.create({
                name,
                price,
                color: color ? color : null,
                stock,
                images : req.file ? req.file.filename : "default-image.png",
                id_category : category

            })
            .then((result) =>{
                res.redirect("/admin/list-product")
            })
            .catch(errors => {res.send(errors)})
            


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
            include :[{ association : "category"}]
        })
        let allCategories = Categories.findAll()
        Promise.all([oneProduct, allCategories])
        .then(([product, categories]) =>{
            res.render('admin/editProduct', {
                product,
                categories,
                fileValidator : req.fileValidationError
            })
        })
       
        
        

    },

  
      
    update: (req, res) =>{

        let errors = validationResult(req);
        
        if (errors.isEmpty() && !req.fileValidationError) {
            let { name, category, price, color, stock, images, lastImage } = req.body
            Products.findByPk(req.params.id)
            .then((product)=>{
                if(req.file){
                    if (fs.existsSync('./public/images/products/' + product.images) && product.images !== "default-image.png") {
                        fs.unlinkSync(`./public/images/products/${product.images}`)
                    } else {
                        console.log('no se encontro el archivo')
                    }
                }
                Products.update({
                    name,
                    price,
                    color: color ? color : null,
                    stock,
                    images : req.file ? req.file.filename : product.image,
                    id_category : category
        
                },{
                    where : {id : req.params.id}
                })
                .then((result) =>{
                    res.redirect("/admin/list-product")
                })
                .catch(errors => {res.send(errors)})
            })
            
           
            

        } else {
            res.send({
                errors : errors.mapped(),
                body : req.body
            })
            let oneProduct = Products.findByPk(req.params.id,{
                include :[{ association : "category"}]
            })
            let allCategories = Categories.findAll()
            Promise.all([oneProduct, allCategories])
            .then(([product, categories]) =>{
                res.render('admin/editProduct', {
                    product,
                    categories,
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
                if (fs.existsSync('./public/images/products' + product.images) && product.images !== "default-image.png") {
                    fs.unlinkSync(`./public/images/products/${product.images}`)
                } else {
                    console.log('no se encontro el archivo')
                }
                Products.destroy({
                    where : {
                        id : req.params.id
                    }
                })
                .then((result) =>{
                    res.redirect('/admin/list-product')
                })
            })
            .catch(errors => res.send(errors))
            
        

    },
    allUsers: (req,res) =>{
        res.render("admin/users/allUsers",{
            users
        })
    },
    editUser:(req,res) =>{
        let userId = +req.params.id;
        let user = users.find(user => user.id === userId)

        res.render('admin/users/editUser', {
            user
        })
    },
    updateUser:(req,res) =>{
        let userId = +req.params.id;
        const {name, email, password} = req.body

        users.forEach(user => {
            if(user.id === userId){
                user.name = name
                user.email = email
                user.password = password
            }
        });

        writeUsersJson(users)

        res.redirect("/admin/users")
    },
    destroyUser: (req, res) => {
        let userId = +req.params.id;

		users.forEach(user => {
			if(user.id === userId){
				let userToDestroyIndex = users.indexOf(user) 
				if(userToDestroyIndex !== -1) {
					users.splice(userToDestroyIndex, 1)
				}else{ 
					console.log('No encontré el usuario')
				}
			}
		})

		writeUsersJson(users)
		res.redirect("/admin/users")
    }

}

module.exports = controller