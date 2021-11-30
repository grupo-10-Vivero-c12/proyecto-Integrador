let fs = require('fs');
let path = require('path');


module.exports = {
    productos : JSON.parse(fs.readFileSync(path.join(__dirname, 'productos.json'), "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync(path.join(__dirname, 'productos.json'), JSON.stringify(dataBase), "utf-8")
    }
}




