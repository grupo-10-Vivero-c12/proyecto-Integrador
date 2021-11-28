let path = require('path');

let controller = {
    index:function (req, res) {
        return res.render('shoppingCart')
    },
    payment:function (req, res) {
        res.sendFile(path.join(__dirname, '../views/payment.html'))
    }
}

module.exports = controller