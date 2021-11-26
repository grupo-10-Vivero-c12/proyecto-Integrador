let express = require('Express');
let app = express();
let path = require('path');
let PORT = 3000;

/* Enrutadores */
let homeController = require('./controllers/homeController');
let loginController = require('./controllers/loginController');
let productDetailController = require('./controllers/productDetailController');
let registerController = require('./controllers/registerController');
let shoppingCartController = require('./controllers/shoppingCartController');

app.use(express.static('public'));

app.get('/', homeController.index)

// app.get('/index', function (req, res) {
//     res.sendFile(path.join(__dirname, './views/index.html'))
// })

app.get('/login', loginController.index)

app.get('/productDetail', productDetailController.index)

app.get('/register', registerController.index)

app.get('/shoppingCart', shoppingCartController.index)

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))
