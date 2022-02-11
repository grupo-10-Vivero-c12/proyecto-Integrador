
let db = require('../database/models')
let Products = db.Product
let Categories = db.Categorie
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
    detail:function (req, res) {
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
    },
    category : (req,res) =>{
        let filterProduct;
        switch (req.query.filter) {
            case "nameAsc":
                filterProduct = Products.findAll({ where: {id_category : req.params.id}, order : [["name", "ASC"]]})
                break;
            case "nameDesc":
                filterProduct  = Products.findAll({ where: {id_category : req.params.id}, order : [["name", "DESC"]]})
                break;
            case "priceMin":
                filterProduct  = Products.findAll({ where: {id_category : req.params.id}, order : [["price", "ASC"]]})
                console.log("paso por aca")
                break;
            case "priceMay":
                filterProduct  = Products.findAll({where: {id_category : req.params.id}, order : [["price", "DESC"]]})
                break;
            default:
                filterProduct  = Products.findAll({ where: {id_category : req.params.id}})
                break;
        }
        Promise.all([filterProduct])
        .then(([products]) =>{
            res.render("products/productsForCategory", {
                products,
                toThousand,
                session: req.session
            })
        })
    },

    allProducts: (req, res) =>{

        let filterProduct;
        switch (req.query.filter) {
            case "nameAsc":
                filterProduct = Products.findAll({ include : [{association : "category"}, {association : "opinions"}, {association : "description"}], order : [["name", "ASC"]]})
                break;
            case "nameDesc":
                filterProduct  = Products.findAll({ include : [{association : "category"}, {association : "opinions"}, {association : "description"}], order : [["name", "DESC"]]})
                break;
            case "priceMin":
                filterProduct  = Products.findAll({ include : [{association : "category"}, {association : "opinions"}, {association : "description"}], order : [["price", "ASC"]]})
                console.log("paso por aca")
                break;
            case "priceMay":
                filterProduct  = Products.findAll({ include : [{association : "category"}, {association : "opinions"}, {association : "description"}], order : [["price", "DESC"]]})
                break;
            default:
                filterProduct  = Products.findAll({ include : [{association : "category"}, {association : "opinions"}, {association : "description"}]})
                break;
        }
        
        Promise.all([filterProduct])
        .then(([products])=>{
            res.render("products/allProducts", {
                products,
                toThousand,
                session: req.session
            })

        }) 
    }
    
}

module.exports = controller