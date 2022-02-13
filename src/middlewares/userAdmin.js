module.exports = require("./isLoging")

 const { isAdmin } = (req, res, next) => {
    if (req.session.user.rol === 1){
        next()
    }else{
        res.redirect('/')
    }
    next()
}