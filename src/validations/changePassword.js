let { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const Users = db.User;

module.exports =[
    check('password')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña'),

    body('password')
    .custom((value, {req}) => {
        return Users.findOne({
            where: {
                id : req.params.id
            }
        })
        .then(user => {      
            if(!bcrypt.compareSync(value, user.password)){
                return Promise.reject()
            }
        })
        .catch(() => {
            return Promise.reject("Contraseña invalida")
        })
     }),

    check('newPassword')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña'),

    check('pass2')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña'),

    body('pass2')
    .custom((value, {req}) => req.body.newPassword !== value ? false : true)
    .withMessage('Las contraseñas no coinciden')
]

