let path = require('path');
let {productos} = require('../data/dataBase')
let db = require('../database/models')
let Products = db.Product
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    index:function (req, res) {
        Products.findAll()
        .then(products =>{
            res.render('home',{
                products,
                toThousand,
                session: req.session
            })
        })
        
        
    },
    list : (req, res) =>{
        Products.findAll()
        .then((products) =>{
            res.send(products)
        })
    }
}

module.exports = controller