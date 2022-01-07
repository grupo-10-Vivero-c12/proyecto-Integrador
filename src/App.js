let express = require('Express');
let app = express();
let path = require('path');
let PORT = 3000;

/* Enrutadores */
let homeRouter = require('./routes/home'); 
let productDetailRouter = require('./routes/productDetail');
let shoppingRouter = require('./routes/shoppingCart');
let adminRouter = require('./routes/admin')
let usersRouter = require('./routes/users')
let session = require('express-session')
/* let perfilUsuarioRouter = require('./routes/perfilUsuario'); */

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
let methodOverride = require('method-override')
app.use(methodOverride('_method'))

/* Capturar informacion */
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

/* Middlewares de rutas */
app.use('/', homeRouter)
app.use('/users', usersRouter)
app.use('/productDetail', productDetailRouter)
app.use('/shoppingCart', shoppingRouter)
app.use('/admin', adminRouter)

/* app.use('/perfilUsuario', perfilUsuarioRouter); */

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))
