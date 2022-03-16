module.exports = (sequelize, dataTypes) =>{
    let alias = "Opinion"
    let cols = {
        id : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement : true,
            primaryKey : true
        },
        content :{
            type: dataTypes.STRING(300),
            allowNull : true,
        },
        stars: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        id_product : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            notNull: false,
        },

    }

    let config ={
        tableName : "opinions",
        timestamps : false
    }


    const Opinion = sequelize.define(alias, cols, config)

    Opinion.associate = (models)=>{
        Opinion.belongsTo(models.Product,{
            as : "product",
            foreignKey : "id_product"
        })
    }

    return Opinion

}