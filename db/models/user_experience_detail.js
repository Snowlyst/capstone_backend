"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_experience_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_experience_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      positionTitle: DataTypes.STRING,
      companyName: DataTypes.STRING,
      startPeriod: DataTypes.STRING,
      endPeriod: DataTypes.STRING,
      specialization: DataTypes.STRING,
      role: DataTypes.STRING,
      country: DataTypes.STRING,
      industry: DataTypes.STRING,
      positionLevel: DataTypes.STRING,
      monthlySalary: DataTypes.STRING,
      executiveSummary: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "user_experience_detail",
      underscored: true,
    }
  );
  return User_experience_detail;
};
