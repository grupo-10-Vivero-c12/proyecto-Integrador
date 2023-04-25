let fetch = require('node-fetch')

const getUrl = (req) => `${req.protocol}://${req.get('host')}${req.originalUrl}`

let controller = {
    countries : (req, res)=>{
        fetch('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54OSR?ver=0df5')
        .then(response => response.json())
        .then(products => {
            products.sort(function (a, b) {
                if (a.name.common > b.name.common) {
                return 1;
                }
                if (a.name.common < b.name.common) {
                return -1;
                }
                // a must be equal to b
                return 0;
            });

            nameCountries = []
            countries.forEach(element => {
                nameCountries.push(element.name.common)
            });
            res.status(200).json({
                meta : {
                    status : 200,
                    total : countries.length,
                    url : getUrl(req)
                },
                data : {
                    nameCountries
                }
            })
        })
    },
    /*provinces : (req,res)=>{
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => response.json())
        .then(provinces => {
            provinces.provincias.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                return 1;
                }
                if (a.nombre < b.nombre) {
                return -1;
                }
                // a must be equal to b
                return 0;
            });
            

            provincesSort = []
            provinces.provincias.forEach(element => {
                provincesSort.push(element.nombre)
            });
            res.status(200).json({
                meta : {
                    status : 200,
                    total : provincesSort.length,
                    url : getUrl(req)
                },
                data : {
                    provincesSort
                }
            })
        })
    } */
}


module.exports = controller