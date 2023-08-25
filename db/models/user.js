"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.user_role, { foreignKey: "userRoleId" });
      this.hasOne(models.user_personal_detail, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      userRoleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user_role",
          key: "id",
        },
      },
      approvedByAdmin: DataTypes.BOOLEAN,
      userName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
