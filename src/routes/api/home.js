let express = require('express')
let router = express.Router()
let controller = require('../../controllers/api/homeController')

router.get('/apiv1/', controller.index)
// router.get('/frequent-questions', controller.preguntas_frecuentes)
// router.get('/locals', controller.locals)


module.exports = router