let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController')


router.get('/all', controller.allProducts)
router.get('/detail/:id', controller.detail)
router.get('/category/:id', controller.category)


module.exports = router