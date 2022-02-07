module.exports = (sequelize, dataTypes) =>{
    let alias = "Opinion"
    let cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
            autoIncrement : true,
            primaryKey : true,
            constraint: 'opinions_ibfk_1',
            FOREIGNKEY: 'id_product',
            KEY: 'id_product',
        },
        content :{
            type: dataTypes.STRING(300),
            notNull : true,
        },
        starts: {
         type: dataTypes.INTEGER,
         notNull: true,
        },
        id_product : {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
        },

    }

    let config ={
        tableName : "opinion",
        timestamps : false
    }


    const Opinion = sequelize.define(alias, cols, config)

    Opinion.associate = (models)=>{
        Opinion.hasMany(models.Product,{
            as : "opinion",
            foreignKey : "id_opinion"
        })
    }

    return Opinion

}