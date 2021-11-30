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
let payRouter = require('./routes/payRouter')

app.use(express.static('public'));

/* set para ejs  */
app.set('view engine','ejs')
app.set('views',path.join(__dirname , "views"))

/* METHOD OVERRIDE */
let methodOverride = require('method-override')
app.use(methodOverride('_method'))

/* Capturar informacion */
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

/* Middlewares de rutas */
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/productDetail', productDetailRouter)
app.use('/register', registerRouter)
app.use('/shoppingCart', shoppingRouter)
app.use('/admin', adminRouter)
app.use('/payment', payRouter)

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))
