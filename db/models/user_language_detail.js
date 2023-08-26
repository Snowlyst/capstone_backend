"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_language_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_language_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      language: DataTypes.STRING,
      spoken: DataTypes.INTEGER,
      writtent: DataTypes.INTEGER,
      ifPrimary: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user_language_detail",
      underscored: true,
    }
  );
  return User_language_detail;
};
