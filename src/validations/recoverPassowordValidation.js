const { check, body } = require('express-validator');
const db = require('../database/models');
const Users = db.User

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Ingrese un email').bail()
    .isEmail()
    .withMessage('Ingrese un email valido'),


    body('email')
    .custom((value)=>{
        return Users.findOne({
            where : {
                email : value
            }
        })
        .then((user)=>{
            if (!user) {
                return Promise.reject()
            }
        })
        .catch(() => {
            return Promise.reject('No existe un email registrado ')
        })
    })
]