let path = require('path');
let {productos} = require('../data/dataBase')

let controller = {
    index:function (req, res) {
        return res.render('home',{
            productos,
            session: req.session
        })
    }
}

module.exports = controller