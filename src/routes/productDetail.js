let express = require('express')
let router = express.Router()
let controller = require('../controllers/productDetailController')

router.get('/:id', controller.index)

module.exports = router