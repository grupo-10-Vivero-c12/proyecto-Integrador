module.exports = (sequelize, dataTypes) =>{
    let alias = "Category"
    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
        },
        id_Producto : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },

    }

    let config ={
        tableName : "Category",
        timestamps : false
    }


    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models)=>{
        Category.belongsTo(models.Product,{
            as : "Category",
            foreignKey : "id_product"
        })
    }

    return Category

}