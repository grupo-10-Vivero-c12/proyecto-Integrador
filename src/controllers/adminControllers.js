let {productos, writeJson, users, writeUsersJson} = require('../data/dataBase.js')
let { validationResult } = require('express-validator')
let categorias = []


const db = require('../database/models')
const Products = db.Product
const Categories = db.Categorie


productos.forEach(element => {
    if(categorias.includes(element.categoria)){
    } else{
        categorias.push(element.categoria)
     }     
});

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
                products
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
            
            res.send(req.body)


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
        let obId = +req.params.id
        let p = null
        productos.forEach(product =>{
            if (product.id == obId) {
                p = product
            }
        })
        res.render('admin/editProduct', {
            p,
            fileValidator : req.fileValidationError
        })
        

    },

  
      
    update: (req, res) =>{
        let idProducto = +req.params.id

        let errors = validationResult(req);
        
        if (errors.isEmpty() && !req.fileValidationError) {
            let {nombre, imagen, categoria, color, precio, cantidad, descripcion, ubicacion, sustrato, floracion } = req.body
            productos.forEach(product =>{
                if (product.id == idProducto) {
                    console.log(req.body);
                    product.id = product.id,
                    product.nombre = nombre,
                    product.precio = precio,
                    product.color = color,
                    product.cantidad = cantidad,
                    product.categoria = categoria,
                    product.imagen = req.file ? req.file.filename : product.imagen,
                    product.descripcion = descripcion,
                    product.ubicacion = ubicacion,
                    product.sustrato = sustrato,
                    product.floracion = floracion,
                    product.opiniones = product.opiniones
                    product.oferta = false
                }
            })
            

            writeJson(productos)
            res.redirect('/admin/list-product')
        } else {
            let p 
            res.render('admin/editProduct', {
                errors : errors.mapped(),
                p,
                old : req.body,
                id : idProducto,
                fileValidator : req.fileValidationError
            })
        }
        
        

    },
    delete: (req,res) =>{
        let resultProductos = productos.filter(pro => pro.id != req.params.id);
        writeJson(resultProductos)
        
        res.redirect('/admin/list-product')

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