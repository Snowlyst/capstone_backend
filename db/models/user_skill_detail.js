"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_skill_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_skill_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      skills: DataTypes.STRING,
      proficiency: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_skill_detail",
      underscored: true,
    }
  );
  return User_skill_detail;
};
