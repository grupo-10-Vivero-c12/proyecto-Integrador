module.exports = require("./isLoging")

 isAdmin = (req, res, next) => {
    if (req.session.user.rol === 1){
        next()
    }else{
        res.redirect('/')
    }
 }
 