module.exports = (sequelize, DataTypes) =>{

    let alias = "Categorie";

    let cols = {
        id : {
            type: DataTypes.INTERGER, 
            notNull: true,
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
           type: DataTypes.STRING(20),
            notNull: true,
        },
    }

    let config = {
        tableName : "categories",
        timestamps : false
    }

    const Categorie = sequelize.define(alias, cols, config)

    Categorie.associate = (models)=>{
        Categorie.hasMany(models.Product,{
            as : "products",
            foreignKey : "id_category"
        })
    }

    return Categorie
}

