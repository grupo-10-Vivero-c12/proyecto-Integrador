module.exports = (sequelize, dataTypes) =>{
  let alias = "Rol"
  let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
        },
        name : {
            type : dataTypes.STRING(20),
            allowNull : false
        }

  }

    let config ={
        tableName : "Rol",
        timestamps : false
    }


    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = (models)=>{
        Rol.belongsTo(models.Usuario,{
            as : "Uusario",
            foreignKey : "id_usuario"
        })
    }

    return Rol

}
