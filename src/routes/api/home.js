let express = require('express')
let router = express.Router()
let controller = require('../../controllers/api/homeController')

router.get('/apiv1/', controller.index)

module.exports = router