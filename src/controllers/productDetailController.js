let path = require('path');

let controller = {
    index:function (req, res) {
        res.render("productDetail.ejs")
    }
}

module.exports = controller