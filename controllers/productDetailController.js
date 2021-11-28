let path = require('path');

let controller = {
    index:function (req, res) {
        return res.render('productDetail')
    }
}

module.exports = controller