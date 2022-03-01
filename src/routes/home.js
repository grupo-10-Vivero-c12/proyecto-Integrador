let express = require('express')
let router = express.Router()
let controller = require('../controllers/homeController')

router.get('/', controller.index)
router.get('/p', controller.prueba)


module.exports = router