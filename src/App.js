let express = require('Express');
let app = express();
let path = require('path');
let PORT = 3000;

/* Enrutadores */
let homeRouter = require('./routes/home');
let loginRouter = require('./routes/login');
let productDetailRouter = require('./routes/productDetail');
let registerRouter = require('./routes/register');
let shoppingRouter = require('./routes/shoppingCart');
let adminRouter = require('./routes/admin')

app.use(express.static('public'));

/* Seteos de EJS */
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

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
