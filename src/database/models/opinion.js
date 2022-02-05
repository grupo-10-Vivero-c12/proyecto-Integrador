module.exports = (sequelize, dataTypes) =>{
    let alias = "Opinion"
    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        id_Producto : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },

    }

    let config ={
        tableName : "Opinion",
        timestamps : false
    }


    const Opinion = sequelize.define(alias, cols, config)

    Opinion.associate = (models)=>{
        Opinion.hasMany(models.Product,{
            as : "Product",
            foreignKey : "id_Opinion"
        })
    }

    return Opinion

}