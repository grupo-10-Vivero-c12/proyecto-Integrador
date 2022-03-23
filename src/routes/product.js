let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController')


router.get('/', controller.allProducts)
router.get('/detail/:id', controller.detail)
router.get('/category/:id', controller.category)
router.get('/search', controller.search)


module.exports = router