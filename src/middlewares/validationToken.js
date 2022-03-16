const jwt = require('jsonwebtoken')
require('dotenv').config()

function validateToken(req, res, next) {
    const accessToken =  req.params.token
    if (!accessToken) {
        res.send('Access denied, token expire or incorrect')
    }

    jwt.verify(accessToken, process.env.SECRET, (err, user)=>{
        if (err) {
            res.send('Access denied, token expire or incorrect')
        } else{
            next()
        }

    })
}

module.exports = validateToken