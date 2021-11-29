let {productos} = require('../data/dataBase.js')
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

}

module.exports = controller