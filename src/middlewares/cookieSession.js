function cookieSession (req, res, next) {
    if (req.cookies.userTimbo) {
        req.session.user = req.cookies.userTimbo;
        res.locals.user = req.session.user
    }
    next()
}








module.exports = cookieSession