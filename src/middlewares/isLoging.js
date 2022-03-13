let login = {
    isLogin : (req, res, next) =>{
        if (req.session.user) {
            res.redirect('/users/profile')
        } else{
            next()
        }
    },
    isAdmin : (req, res, next)=>{
        // if (req.session.user) {

        //     if (req.session.user.rol === 1) {
        //         next()
        //     } else {
        //         res.redirect('/')
        //     }
        // } else{
        //     res.redirect('/')
        // }
        next()
    },
    notLogin: (req,res, next) =>{
        if (!req.session.user) {
            res.redirect('/')
        } else{
            next()
        }

    }

}

module.exports = login