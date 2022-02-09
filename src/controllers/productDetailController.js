
let db = require('../database/models')
let Products = db.Product
let Categories = db.Categorie
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let controller = {
    index:function (req, res) {
        let oneProduct = Products.findByPk(req.params.id, { include : [{association : "category"}, {association : "opinions"}, {association : "description"}]})
        let allCategories = Categories.findAll({include :[{ association : "products"}]})
        Promise.all([oneProduct, allCategories])
        .then(([product, categories])=>{
            
            res.render("products/productDetail.ejs", {
                product,
                categories,
                description : product.description,
                opinions : product.opinions,
                toThousand,
                session: req.session
            })
        })    
    }
}

module.exports = controller