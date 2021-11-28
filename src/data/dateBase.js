let fs = require('fs');

module.exports = {
    getSucursales : JSON.parse(fs.readFileSync('./data/products.json', 'utf-8')),
    writeJson : (dataBase) => {
        fs.writeFileSync('./data/concesionarias.json', JSON.stringify(dataBase), "utf-8")
    },

}

