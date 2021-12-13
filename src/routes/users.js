let express = require('express');
let router = express.Router();
let controller = require('../controllers/usersController');

/* GET - Show login form */
router.get('/login', controller.login)

/* GET - Show register form */
router.get('/register', controller.register)

/* POST - Create new user */
router.post('/store',controller.store)

/* GET - Show user edit form (User)*/
router.get('/edit/:id', controller.edit)

/* PUT - Update a user (User)*/
router.put('/edit/:id',controller.update)

module.exports = router