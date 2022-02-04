let { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('No puede estar vacio'),

    // check('ubicacion')
    // .notEmpty()
    // .withMessage('No puede estar vacio'),

    check('category')
    .notEmpty()
    .withMessage('Debes seleccionar una opción'),

    check('price')
    .notEmpty()
    .withMessage('No puede estar vacio').bail()
    .isNumeric()
    .withMessage('Debes ingresar solo numeros'),


    check('stock')
    .notEmpty()
    .withMessage('No puede estar vacio').bail()
    .isNumeric()
    .withMessage('Debes ingresar solo numeros')

]