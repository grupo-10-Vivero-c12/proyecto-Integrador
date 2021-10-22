let express = require('Express');
let app = express();
let path = require('path');

let PORT = 3000;

app.use(express.static('public'));

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/footer', function (req, res) {
    res.sendFile(path.join(__dirname, './views/footer.html'))
})

app.get('/header', function (req, res) {
    res.sendFile(path.join(__dirname, './views/header.html'))
})

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/productDetail', function (req, res) {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/shopping-cart', function (req, res) {
    res.sendFile(path.join(__dirname, './views/shopping-cart.html'))
})

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))
