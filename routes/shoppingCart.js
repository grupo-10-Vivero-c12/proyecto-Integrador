let express = require('express')
let router = express.Router()
let controller = require('../controllers/shoppingCartController')

router.get('/', controller.index)

module.exports = router