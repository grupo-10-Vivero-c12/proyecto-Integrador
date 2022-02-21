let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController');
let loginValidator = require('../validations/login')
let uploadFile = require('../middlewares/uploadAvatar')
let registerValidator = require("../validations/register")
let { isLogin }= require('../middlewares/isLoging')

/* GET - Show login form */
router.get('/login', isLogin ,controller.login)
/* POST - Login Data */
router.post('/login', loginValidator, controller.processLogin)

/* GET - Show register form */
router.get('/register', isLogin ,controller.register)
/* POST - Register data */
router.post('/register',uploadFile.single('avatar'),registerValidator, controller.processRegister)

/* GET - Show user edit form (User)*/
// router.get('/edit/:id',isLogin, controller.edit)
/* PUT - Update a user (User)*/
// router.put('/edit/:id',controller.update)

/* GET - Show profile user */
router.get('/profile',  isLogin,  controller.profile) 
// router.get('/editProfile', /* isLogin, */ controller.edit) 


/* GEt - Logout*/
router.get('/logout', controller.logout)


module.exports = router