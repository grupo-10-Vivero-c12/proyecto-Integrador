module.exports = (sequelize, dataTypes) =>{
   
    let alias = "User"
    let cols = { 
        id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement : true,
            primaryKey : true,
        },
        first_name : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        last_name : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        email : {
            type : dataTypes.STRING(50),
            allowNull : false,
            unique: true
        },
        password : {
            type : dataTypes.STRING(80),
            allowNull : false,
        },
        avatar : {
            type : dataTypes.STRING(100),
            allowNull : false,
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
            allowNull : false,
            defaultValue: 2,
        },
    };  


    let config = {
        tableName : "users",
        timestamps : false
    }


    const User = sequelize.define(alias, cols, config)

    User.associate = (models)=>{
        User.belongsTo(models.Rol,{
            as : "rol",
            foreignKey : "id_rol"
        });
    }

    return User

}