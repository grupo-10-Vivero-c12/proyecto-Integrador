module.exports = (sequelize, dataTypes) =>{
   
     let alias = "Usuario"
    let cols = { 
        id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            notNull: true,
            autoIncrement : true,
            primaryKey : true,
            uniqueKey: "email",
            key: 'id_rol',
            constraint: 'users_ibfk_1',
            foreignKey: 'id_rol',
        },
        first_name : {
            type : dataTypes.STRING(50),
            notNull : true,
        },
        last_name : {
            type : dataTypes.STRING(50),
            notNull : true,
        },
        email : {
                type : dataTypes.STRING(50),
                notNull : true,
        },
        password : {
            type : dataTypes.STRING(80),
            notNull : true,
        },
        avatar : {
            type : dataTypes.STRING(100),
            defaultValue : "default-image.png"
        },
        address : {
            type : dataTypes.STRING(50),
            allowNull : true,
        },
        phone : {
            type : dataTypes.BIGINT(20),
            allowNull : true,
        },
        cp : {
            type : dataTypes.INTEGER(4),
            allowNull : true,
        },
        province : {
            type : dataTypes.STRING(20),
            allowNull : true,
        },
        country : {
            type : dataTypes.STRING(20),
            allowNull : true,
        },
       
        date_birth : {
            type : dataTypes.DATE,
            allowNull : true,
        },
        age: {
            type : dataTypes.INTEGER(3),
            allowNull : true,
        },
        id_rol : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            notNull : true,
            defaultValue: 2,
        },
    };  


    let config = {
        tableName : "User",
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