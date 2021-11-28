let express = require('Express');
let app = express();
let path = require('path');
let PORT = 3000;

/* Enrutadores */
let homeRouter = require('./src/routes/home');
let loginRouter = require('./src/routes/login');
let productDetailRouter = require('./src/routes/productDetail');
let registerRouter = require('./src/routes/register');
let shoppingRouter = require('./src/routes/shoppingCart');
let adminRouter = require('./src/routes/admin')

/* set para ejs  */
app.set('view engine','ejs')
app.set('views', __dirname + '/src/views')

app.use(express.static('public'));

/* Middlewares de rutas */
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/productDetail', productDetailRouter)
app.use('/register', registerRouter)
app.use('/shoppingCart', shoppingRouter)
app.use('/admin', adminRouter)

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))
