let {productos, writeJson, users, writeUsersJson} = require('../data/dataBase.js')

let categorias = []
productos.forEach(element => {
    if(categorias.includes(element.categoria)){
    } else{
        categorias.push(element.categoria)
     }     
});

let controller = {
    home:(req, res) =>{
        res.render('admin/adminHome');
    },
    add: (req, res) => {
        res.render('admin/addProducts')
    },
    allProducts: (req, res) => {
        res.render('admin/allProducts', {
            productos
        })
    },
    allCategory: (req, res) => {
        
        res.render('admin/allCategorys',{
            categorias
        })
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
            p
        })
        

    },

  
      
    update: (req, res) =>{
        let idProducto = +req.params.id
        
        let {nombre, imagen, categoria, color, precio, cantidad, descripcion, ubicacion, sustrato, floracion } = req.body
        productos.forEach(product =>{
            if (product.id == idProducto) {
                
                product.id = 1,
                product.nombre = nombre,
                product.precio = precio,
                product.color = color,
                product.cantidad = cantidad,
                product.categoria = categoria,
                product.imagen = imagen == "" ? product.imagen : imagen,
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
        

    },
    store: (req, res) =>{
        let lastId = productos.length
        let {nombre, imagen, categoria, color, precio, cantidad, descripcion, ubicacion, sustrato, floracion } = req.body
        
        let nuevoProducto = {
            id: lastId + 1,
            nombre : nombre,
            precio : precio,
            color : color,
            cantidad : cantidad,
            categoria : categoria,
            imagen : imagen,
            descripcion : descripcion,
            ubicacion : ubicacion,
            sustrato : sustrato,
            floracion : floracion,
            opiniones : [],
            oferta : false
        }
        
        productos.push(nuevoProducto);
        writeJson(productos)
        res.redirect('/admin/list-product')

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