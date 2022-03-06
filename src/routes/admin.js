let express = require("express");
let router = express.Router();
let upload = require('../middlewares/uploadProductFiles');
let addProductValidator = require('../validations/addProducts')
let editProductValidator = require('../validations/editProduct')
let { isAdmin } = require('../middlewares/isLoging')
var {controllerProducts, controllerUsers} = require('../controllers/adminControllers');

/* GET - Home page */

router.get("/", isAdmin,controllerProducts.home)
router.get("/add", isAdmin,  controllerProducts.add)
router.post("/add",upload.single('images'), addProductValidator ,controllerProducts.store)
// GET - Show products list
router.get("/list-product",isAdmin, controllerProducts.allProducts)
//DELETE - delete one product
router.delete("/list-product/:id", controllerProducts.delete)

router.get("/all-category", isAdmin, controllerProducts.allCategory)
//editor-formulario de productos
router.get("/editProduct/:id", isAdmin, controllerProducts.edit)

router.put("/editProduct/:id" ,upload.single('images'),  editProductValidator,controllerProducts.update)

//-----------------------------------
/* GET - Show all users */
router.get('/users', isAdmin, controllerUsers.index) 

/* GET - Show user edit form (Admin)*/
router.get('/users/edit/:id', isAdmin, controllerProducts.editUser)
/* PUT - Update a user (Admin)*/
router.put('/users/edit/:id',controllerProducts.updateUser)
/* DELETE - Delete one user */
router.delete('/users/delete/:id', controllerProducts.destroyUser)


//------------------------------------
router.get('/', isAdmin , controllerProducts.home)


/* POST - Login Data */
router.post('adminHome', controllerProducts.store)

/* crud de usuarios admin */
// crear

router.post('/', controllerUsers.index);

router.post('/edit:id', controllerUsers.update);

router.post('/delete:id', controllerUsers.delete);



module.exports = router