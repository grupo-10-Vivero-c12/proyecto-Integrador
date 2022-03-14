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
    prueba : (req,res)=>{
        db.Description.findAll({
            include : [{association : "product"}]
        })
        .then(result =>{
            res.send(result)
        })
    }

}

module.exports = controller