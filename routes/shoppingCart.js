let express = require('express')
let router = express.Router()
let controller = require('../controllers/shoppingCartController')

router.get('/', controller.index)
router.get('/payment', controller.payment)

module.exports = router