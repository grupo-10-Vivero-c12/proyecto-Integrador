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
    preguntas_frecuentes : (req,res)=>{
        res.render('frequent_questions',{
            session: req.session
        })
    },
    locals : (req,res)=>{
        res.render('locals',{
            session: req.session
        })
    }

}

module.exports = controller