module.exports = (sequelize, dataTypes) =>{
  let alias = "Rol"
  let cols = {
        id : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            notNull: true,
            autoIncrement: true,
            primaryKey : true,
            uniqueKey: "name",
        },
        name : {
            type : dataTypes.STRING(5),
            notNull: true,
        },

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
