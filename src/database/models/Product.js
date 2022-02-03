module.exports = (sequelize, dataTypes) =>{
    let alias = "Product"
    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        name : {
            type : dataTypes.STRING(20),
            allowNull : false
        },
        discount : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            defaultValue : 0
        },
        price : {
            type : dataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
        },
        color : {
            type : dataTypes.STRING(20),
            allowNull : true
        },
        stock : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        images : {
            type : dataTypes.STRING(100),
            allowNull : true,
            defaultValue : "default-image.png"
        },
        id_category : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },
        id_description : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        }

    }

    let config ={
        tableName : "products",
        timestamps : false
    }


    const Product = sequelize.define(alias, cols, config)


    return Product

}