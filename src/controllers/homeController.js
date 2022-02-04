let path = require('path');
let {productos} = require('../data/dataBase')
let db = require('../database/models')

let Products = db.Product

let controller = {
    index:function (req, res) {
        return res.render('home',{
            productos,
            session: req.session
        })
        // Products.findAll()
        // .then((products) =>{
        //     res.send(products)
        // })
    },
    list : (req, res) =>{
        Products.findAll()
        .then((products) =>{
            res.send(products)
        })
    }
}

module.exports = controller