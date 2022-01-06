const { check, body } = require('express-validator');
const { users } = require("../data/dataBase")


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom((value) => {
       let user = users.find(user=>{ 
            return user.email == value 
        })

        if(user){
            return false
        }else{
            return true
        }
    }).withMessage('Email ya registrado'),

    check('password1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('password2').custom((value, {req}) => value !== req.body.password1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),
]