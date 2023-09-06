"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_educational_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_educational_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      institute: DataTypes.STRING,
      graduationDate: DataTypes.STRING,
      instituteLocation: DataTypes.STRING,
      qualification: DataTypes.STRING,
      fieldOfStudy: DataTypes.STRING,
      major: DataTypes.STRING,
      grade: DataTypes.STRING,
      award: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_educational_detail",
      underscored: true,
    }
  );
  return User_educational_detail;
};
