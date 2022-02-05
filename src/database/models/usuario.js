module.exports = (sequelize, dataTypes) =>{
   
     let alias = "Usuario"
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
        email : {
            type : dataTypes.UNIQUE(20),
            allowNull : false,
            defaultValue : 0
        },
        password : {
            type : dataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
       },
        avatar : {
            type : dataTypes.STRING(100),
            allowNull : true,
            defaultValue : "default-image.png"
   
        },
        id_Rol : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },
        adress : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 1
        },
        phone : {
            type : dataTypes.INTEGER,
            allowNull : false,
            defaultValue : 1
        },
        cp : {
            type : dataTypes.INTEGER(4),
            allowNull : false,
            defaultValue : 1
        },
        province : {
            type : dataTypes.INTEGER(20),
            allowNull : false,
            defaultValue : 1
        },
         country : {
            type : dataTypes.INTEGER(20),
            allowNull : false,
            defaultValue : 1
        },
        date_birth : {
            type : dataTypes.DATE,
            allowNull : false,
            defaultValue : 1
        },
        age: {
            type : dataTypes.INTEGER(3),
            allowNull : false,
            defaultValue : 1
        }
        };  


    let config = {
        tableName : "Ussers",
        timestamps : false
    }


    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = (models)=>{
        Usuario.belongsTo(models.Rol,{
            as : "Rol",
            foreignKey : "id_Usuario"
        });
    }

    return Usuario

}