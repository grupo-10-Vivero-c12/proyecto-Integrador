let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 3000;
let session = require('express-session')
let cookieParser = require ('cookie-parser')
let cookieSession = require('./middlewares/cookieSession')

/* Enrutadores */
let homeRouter = require('./routes/home'); 
let productDetailRouter = require('./routes/product');
let shoppingRouter = require('./routes/shoppingCart')
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');

// Api
let apiRouter = require('./routes/api/api')
let apiHome = require('./routes/api/home')

app.use(express.static('public'));
app.use(session({
    secret: "viveroTimbo",
    resave: false,
    saveUninitialized: true
}))

/* set para ejs  */
app.set('view engine','ejs')
app.set('views',path.join(__dirname , "views"))

/* METHOD OVERRIDE */
let methodOverride = require('method-override');
const { env } = require('process');
app.use(methodOverride('_method'))

app.use(cookieParser());
app.use(cookieSession);

/* Capturar informacion */
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

/* Middlewares de rutas */
app.use('/', homeRouter)
app.use('/users', usersRouter)
app.use('/product', productDetailRouter)
app.use('/shoppingCart', shoppingRouter)
app.use('/admin', adminRouter)
app.use(apiRouter)
app.use(apiHome)

/* app.use('/perfilUsuario', perfilUsuarioRouter); */

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))

