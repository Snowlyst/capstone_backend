"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.user_role, { foreignKey: "userRoleId" });
      this.hasOne(models.user_personal_detail, { foreignKey: "userId" });
      this.hasMany(models.user_resume_type, {
        foreignKey: "userId",
      });
      this.hasMany(models.user_experience_detail, {
        foreignKey: "userId",
      });
      this.hasMany(models.user_educational_detail, {
        foreignKey: "userId",
      });
      this.hasMany(models.user_skill_detail, {
        foreignKey: "userId",
      });
      this.hasMany(models.user_language_detail, {
        foreignKey: "userId",
      });
      this.hasOne(models.user_additional_detail, {
        foreignKey: "userId",
      });
      this.hasOne(models.user_aboutme_detail, {
        foreignKey: "userId",
      });
      this.hasOne(models.user_privacy_detail, {
        foreignKey: "userId",
      });
      this.hasMany(models.company_profile_info, {
        foreignKey: "userId",
      });
      this.hasMany(models.individual_jobseeker_dashboard, {
        foreignKey: "userId",
      });
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
      avatarUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
