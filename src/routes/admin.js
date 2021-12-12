let express = require("express");
let router = express.Router();
let controller = require("../controllers/adminControllers")

/* GET - Home page */
router.get("/", controller.home)
router.get("/add", controller.add)
router.post("/add", controller.store)
router.get("/list-product", controller.allProducts)
router.delete("/list-product/:id", controller.delete)
router.get("/all-category", controller.allCategory)
router.get("/editProduct/:id", controller.edit)
router.put("/editProduct/:id", controller.update)

//-----------------------------------
/* GET - Show all users */
router.get('/users', controller.allUsers) 
/* GET - Show user edit form */
router.get('/users/edit/:id', controller.editUser)
/* PUT - Update a user */
router.put('/users/edit/:id',controller.updateUser)
/* DELETE - Delete one user */
router.delete('/users/delete/:id', controller.destroyUser)


module.exports = router