// let {getProductos} = require('../data/dateBase')

let controller = {
    home:(req, res) =>{
        res.render('admin/adminHome')
    },
    add: (req, res) => {
        res.render('admin/addProducts')
    },
    allProducts: (req, res) => {
        res.render('admin/allProducts')
    },
    allCategory: (req, res) => {
        res.render('admin/allCategorys')
    }

}

module.exports = controller