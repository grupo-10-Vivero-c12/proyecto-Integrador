let db = require('../../database/models')
let Products = db.Product
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    index:(req, res) =>{
        Products.findAll()
        .then(products =>{

            if (products) {
                res.status(200).json({
                    meta:{
                        response : true,
                        length : products.length,
                        session : req.session.user
                    },
                    data : products
                })
            } else {
                    res.status(400).json({
                    meta:{
                        response : false,
                        msg : "No se han encontrado productos"
                    },
                })
            }
           
        })
        .catch(error =>{
            res.status(500).json({
                meta:{
                    response : false,
                },
                error
            })
        })
        
        
    },

}

module.exports = controller