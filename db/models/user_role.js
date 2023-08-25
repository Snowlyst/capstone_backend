"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Role extends Model {
   
    static associate(models) {
      
      this.hasMany(models.user);
    }
  }
  User_Role.init(
    {
      roleName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_role",
      underscored: true,
    }
  );
  return User_Role;
};
