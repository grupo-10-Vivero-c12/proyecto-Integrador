let express = require('express');
let router = express.Router();
let controller = require('../../controllers/api/usersController');
let loginValidator = require('../../validations/login')
let uploadFile = require('../../middlewares/uploadAvatar')
let registerValidator = require("../../validations/register")
let editUserValidator = require("../../validations/updateProfile")
let recoverValidation = require("../../validations/recoverPassowordValidation")
let { isLogin, notLogin }= require('../../middlewares/isLoging');
let validationToken = require('../../middlewares/validationToken');
const updateProfile = require('../../validations/updateProfile');
const passwordValidator = require('../../validations/changePassword');


/* POST - Login Data */
router.post('/apiv1/login', loginValidator, controller.processLogin)

/* POST - Register data */
router.post('/register',uploadFile.single('avatar'),registerValidator, controller.processRegister)

/* GET - Show profile user */
router.get('/profile/:id', notLogin,  controller.profile) 
/* PUT - Update a user (User)*/
router.put('/update/:id', notLogin, updateProfile,  controller.update) 
router.put('/update/password/:id',notLogin, passwordValidator , controller.updatePassword) 
router.put('/update/image-profile/:id',uploadFile.single('avatar'),notLogin,  controller.updateAvatar) 

router.get('/recover-password', isLogin ,controller.recoverPassword)
router.post('/recover-password', isLogin, recoverValidation ,controller.processRecover)
router.get('/new-password/:token', isLogin, validationToken ,controller.newPassword)
router.post('/new-password/:token', isLogin, validationToken ,controller.ProcessNewPassword)

/* GEt - Logout*/
router.get('/logout', controller.logout)


module.exports = router