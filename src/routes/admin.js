let express = require("express");
let router = express.Router();
let upload = require('../middlewares/uploadProductFiles');
let addProductValidator = require('../validations/addProducts')
let editProductValidator = require('../validations/editProduct')
let { isAdmin } = require('../middlewares/isLoging')
var {controllerProducts, controllerUsers} = require('../controllers/adminControllers');

/* GET - Home page */

router.get("/", isAdmin ,controllerProducts.home)
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


/* crud de usuarios admin */
router.get("/list-user", isAdmin,  controllerUsers.index)
router.post("/list-user", controllerUsers.index)
// GET - Show products list

router.post("/permission", isAdmin,  controllerUsers.permission)

//DELETE - delete one product
router.delete("/list-user/:id", controllerUsers.delete)




module.exports = router