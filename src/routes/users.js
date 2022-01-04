let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController');
let uploadFile = require('../middlewares/uploadAvatar')

/* GET - Show login form */
router.get('/login', controller.login)

/* GET - Show register form */
router.get('/register', controller.register)
/* GET - Show register form */
router.post('/register',uploadFile.single('avatar'), controller.processRegister)

/* GET - Show user edit form (User)*/
router.get('/edit/:id', controller.edit)
/* PUT - Update a user (User)*/
router.put('/edit/:id',controller.update)

/* GET - Show profile user */
router.get('/profile', controller.profile) 

module.exports = router