let { check } = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('No puede estar vacio'),

    check('ubicacion')
    .notEmpty()
    .withMessage('No puede estar vacio'),

    check('categoria')
    .notEmpty()
    .withMessage('Debes seleccionar una opción'),

    check('precio')
    .notEmpty()
    .withMessage('No puede estar vacio').bail()
    .isNumeric()
    .withMessage('Debes ingresar solo numeros'),


    check('cantidad')
    .notEmpty()
    .withMessage('No puede estar vacio').bail()
    .isNumeric()
    .withMessage('Debes ingresar solo numeros')

]