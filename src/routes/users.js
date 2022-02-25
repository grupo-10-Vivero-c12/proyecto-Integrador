let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController');
let loginValidator = require('../validations/login')
let uploadFile = require('../middlewares/uploadAvatar')
let registerValidator = require("../validations/register")
let { isLogin, notLogin }= require('../middlewares/isLoging')

/* GET - Show login form */
router.get('/login', isLogin ,controller.login)
/* POST - Login Data */
router.post('/login', loginValidator, controller.processLogin)

/* GET - Show register form */
router.get('/register', isLogin ,controller.register)
/* POST - Register data */
router.post('/register',uploadFile.single('avatar'),registerValidator, controller.processRegister)

/* GET - Show profile user */
router.get('/profile/:id', notLogin,  controller.profile) 
/* PUT - Update a user (User)*/
router.put('/update/:id',uploadFile.single('avatar'), notLogin,  controller.update) 


/* GEt - Logout*/
router.get('/logout', controller.logout)


module.exports = router