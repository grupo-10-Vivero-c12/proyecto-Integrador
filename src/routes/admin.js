let express = require("express");
let router = express.Router();
let controller = require("../controllers/adminControllers")

/* GET - Home page */
router.get("/", controller.home)
router.get("/add", controller.add)
router.get("/list-product", controller.allProducts)
router.get("/all-category", controller.allCategory)

module.exports = router