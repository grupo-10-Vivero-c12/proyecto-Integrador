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


module.exports = router