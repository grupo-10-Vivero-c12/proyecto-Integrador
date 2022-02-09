module.exports = (sequelize, dataTypes) =>{
  let alias = "Rol"
  let cols = {
        id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
            autoIncrement: true,
            primaryKey : true,
        },
        name : {
            type : dataTypes.STRING(5),
            allowNull : false
        },

  }

    let config ={
        tableName : "roles",
        timestamps : false
    }


    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = (models)=>{
        Rol.hasMany(models.User,{
            as : "users",
            foreignKey : "id_rol"
        })
    }

    return Rol

}
