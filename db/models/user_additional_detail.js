"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_additional_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_additional_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      expectedSalary: DataTypes.STRING,
      preferredWorkLocation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_additional_detail",
      underscored: true,
    }
  );
  return User_additional_detail;
};
