"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_aboutme_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_aboutme_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      name: DataTypes.STRING,
      contactNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      unitNumber: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      nationality: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_aboutme_detail",
      underscored: true,
    }
  );
  return User_aboutme_detail;
};
