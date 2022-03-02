let express = require("express");
let router = express.Router();
let controller = require("../controllers/adminControllers")
let upload = require('../middlewares/uploadProductFiles');
let addProductValidator = require('../validations/addProducts')
let editProductValidator = require('../validations/editProduct')
let { isAdmin } = require('../middlewares/isLoging')
var {adminControllers, controller} = require('../controllers/adminControllers');

/* GET - Home page */

router.get("/", isAdmin,controller.home)
router.get("/add", isAdmin,  controller.add)
router.post("/add",upload.single('images'), addProductValidator ,controller.store)
// GET - Show products list
router.get("/list-product",isAdmin, controller.allProducts)
//DELETE - delete one product
router.delete("/list-product/:id", controller.delete)

router.get("/all-category", isAdmin, controller.allCategory)
//editor-formulario de productos
router.get("/editProduct/:id", isAdmin, controller.edit)

router.put("/editProduct/:id" ,upload.single('images'),  editProductValidator,controller.update)

//-----------------------------------
/* GET - Show all users */
router.get('/users', isAdmin, controller.allUsers) 

/* GET - Show user edit form (Admin)*/
router.get('/users/edit/:id', isAdmin, controller.editUser)
/* PUT - Update a user (Admin)*/
router.put('/users/edit/:id',controller.updateUser)
/* DELETE - Delete one user */
router.delete('/users/delete/:id', controller.destroyUser)

//------------------------------------
router.get('/', isAdmin , controller.home)


/* POST - Login Data */
router.post('adminHome', controller.store)

/* crud de usuarios admin */
// crear

router.get('/crear', adminControllers.create);

router.post('/crear', adminControllers.save);

router.post('/', adminControllers.index);

router.get('/:id', adminControllers.detail);

router.post('/edit:id', adminControllers.update);

router.post('/delete:id', adminControllers.delete);



module.exports = router