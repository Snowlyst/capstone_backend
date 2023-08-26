"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_privacy_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_privacy_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      searchable: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_privacy_detail",
      underscored: true,
    }
  );
  return User_privacy_detail;
};
