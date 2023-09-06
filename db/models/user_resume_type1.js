"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_resume_type extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.individual_jobseeker_dashboard, {
        foreignKey: "id",
      });
    }
  }
  User_resume_type.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      resumeTitle: DataTypes.STRING,
      resumeDescription: DataTypes.STRING,
      resumeUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_resume_type",
      underscored: true,
    }
  );
  return User_resume_type;
};
