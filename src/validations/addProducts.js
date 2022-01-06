let { check} = require('express-validator')


module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('Ingrese un nombre al producto'),

    check('descripcion')
    .isLength({ max : 400})
    .withMessage('Maximo 400 caracteres'),

    check('ubicacion')
    .notEmpty()
    .withMessage('Ingrese lugar (exterior o interior)'),

    check('categoria')
    .notEmpty()
    .withMessage('Seleccione una categoria'),

    check('precio')
    .notEmpty()
    .withMessage('Ingrese un precio para el producto').bail()
    .isNumeric()
    .withMessage('Debe ingresar numeros para el precio'),

    check('cantidad')
    .notEmpty()
    .withMessage('Ingrese la cantidad del producto').bail()
    .isNumeric()
    .withMessage('Debe ingresar numeros para la cantidad')

]