let path = require('path');
let {productos} = require('../data/dataBase')

let controller = {
    index:function (req, res) {
        let productId = +req.params.id
        let product = productos.find(producto => producto.id === productId )
        let productosCategoria = productos.filter(prod => product.categoria === prod.categoria)
        
        res.render("products/productDetail.ejs", {
            product,
            productosCategoria
        })
    }
}

module.exports = controller