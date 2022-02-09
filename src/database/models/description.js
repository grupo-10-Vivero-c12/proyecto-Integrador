module.exports = (sequelize, dataTypes) =>{
    let alias = "Description"
    let cols = {
        id : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            notNull: true,
            autoIncrement : true,
            primaryKey : true,
            
        },
        description : {
            type: dataTypes.STRING(300),
            allowNull : true,

        },
        substratum : {
            type: dataTypes.STRING(300),
            allowNull : true,
        },
        flowering : {
            type: dataTypes.STRING(300),
            allowNull : true,
        },
        location : {
            type: dataTypes.STRING(300),
            allowNull : true,
        },

    }

    let config ={
        tableName : "description",
        timestamps : false
    }


    const Description = sequelize.define(alias, cols, config)

    Description.associate = (models)=>{
        Description.belongsTo(models.Product,{
            as : "description",
            foreignKey : "id_description"
        })
    }

    return Description

}