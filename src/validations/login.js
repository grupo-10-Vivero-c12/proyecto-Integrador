let { check, body } = require('express-validator');
const { users } = require('../data/dataBase')


module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido').bail(),

    
    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña').bail(),

    body('custom')
        .custom((value, {req}) => {
            let user = users.find(user => user.email == req.body.email);

            if(user){
                if(user.password === req.body.password){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }

        }).withMessage('Credenciales inválidas')
]