let path = require('path');

let controller = {
    index:function (req, res) {
        res.render("products/productDetail.ejs")
    }
}

module.exports = controller