let login = {
    isLogin : (req, res, next) =>{
        if (req.session.user) {
            res.redirect('/users/profile')
        } else{
            next()
        }
    },
    isAdmin : (req, res, next)=>{
        if (req.session.user) {

            if (req.session.user.rol === 1) {
                next()
            } else {
                res.redirect('/')
            }
        } else{
            res.redirect('/')
        }
    }

}

module.exports = login