module.exports = (sequelize, dataTypes) =>{
    let alias = "Description"
    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
        },
        ambiente : {
            type : TEXT,
            allowNull : false,
            defaultValue : 1
        },
        sustrato : {
            type : dataTypes.INTEGER,
            allowNull : false,
            defaultValue : 1
        },
        floracion : {
            type : dataTypes.INTEGER,
            allowNull : false,
            defaultValue : 1
        },
        id_Producto : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },

    }

    let config ={
        tableName : "Description",
        timestamps : false
    }


    const Description = sequelize.define(alias, cols, config)

    Description.associate = (models)=>{
        Description.belongsTo(models.Product,{
            as : "Description",
            foreignKey : "id_description"
        })
    }

    return Category

}