module.exports = (sequelize, dataTypes) =>{
    let alias = "Product"
    let cols = {
        id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : false
        },
        discount : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            defaultValue : 0
        },
        price : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            defaultValue : 0
        },
        color : {
            type : dataTypes.STRING(20),
            allowNull : true
        },
        stock : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        images : {
            type : dataTypes.STRING(100),
            allowNull : true,
            defaultValue : "default-image.png"
        },
        id_category : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },
        id_description : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },

    }

    let config ={
        tableName : "products",
        timestamps : false
    }


    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models)=>{
        Product.belongsTo(models.Categorie,{
            as : "category",
            foreignKey : "id_category",
        }),
        
        Product.hasMany(models.Opinion,{
            as : "opinions",
            foreignKey : "id_product"
        }),
        Product.belongsTo(models.Description,{
            as : "description",
            foreignKey : "id_description"
        })
    }
  
    return Product
        
    
}