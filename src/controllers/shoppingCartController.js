let path = require('path');

let controller = {
    index:function (req, res) {
        res.render('shoppingCart',{
            session: req.session
        })
    },
    payment:function (req, res) {
        res.render('payment',{
            session: req.session
        })
    }
}

module.exports = controller