const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize, DataTypes) => {
const Rol = sequelize.define("Rol", {
 cols = {
     id: {
         type: DataTypes.INTEGER
     },
     name: {
         type: DataTypes.STRING
     },
     admin: {
         type: DataTypes.BOOLEAN
     },
    
 }, config});
return Rol;
}

