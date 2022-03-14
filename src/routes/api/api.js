let express = require('express')
let router = express.Router()
let controller = require('../../controllers/api/userApi')

router.get('/countries', controller.countries)
router.get('/provinces', controller.provinces)


module.exports = router