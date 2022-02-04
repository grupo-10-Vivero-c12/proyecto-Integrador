let { check} = require('express-validator')


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Ingrese un nombre al producto'),

    check('description')
    .isLength({ max : 400})
    .withMessage('Maximo 400 caracteres'),

    check('ubicacion')
    .notEmpty()
    .withMessage('Ingrese lugar (exterior o interior)'),

    check('category')
    .notEmpty()
    .withMessage('Seleccione una categoria'),

    check('price')
    .notEmpty()
    .withMessage('Ingrese un precio para el producto').bail()
    .isNumeric()
    .withMessage('Debe ingresar numeros para el precio'),

    check('stock')
    .notEmpty()
    .withMessage('Ingrese la cantidad del producto').bail()
    .isNumeric()
    .withMessage('Debe ingresar numeros para la cantidad')

]