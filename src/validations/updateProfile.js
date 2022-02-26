let { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const Users = db.User;

module.exports =[
    check('first_name')
    .notEmpty()
    .withMessage('Debe ingresar un nombre'),

    check('last_name')
    .notEmpty()
    .withMessage('Debe ingresar un apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debe ingresar un email').bail()
    .isEmail()
    .withMessage('Debe ingresar un email válido'),

    body('email').custom((value, {req}) => {
        if (req.body.last_email !== value) {   
            return Users.findOne({
                where: {
                   email: value,
                }
            })
            .then((user) =>{
                if(user){
                    return Promise.reject("Email ya registrado")
                }
            })
        } else{
            return Promise.resolve()
        }
       
         
     }),

    check('address')
    .notEmpty()
    .withMessage('Ingrese una direccion valida'),

    check('phone')
    .isNumeric()
    .withMessage('Ingrese un número de telefono valido'),

    check('cp')
    .isNumeric()
    .withMessage('Ingrese un número valido'),

    check('date_birth')
    .notEmpty()
    .withMessage('Debe ingresar su fecha de nacimiento'),

    check('age')
    .notEmpty()
    .withMessage('Debes ingresar tu edad').bail()
    .isNumeric()
    .withMessage('Ingrese un número de telefono valido'),

]

