let path = require('path');

let controller = {
    index:function (req, res) {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    }
}

module.exports = controller