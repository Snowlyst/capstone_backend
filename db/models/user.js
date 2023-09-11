"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.user_role, {
        foreignKey: "userRoleId",
      });
      this.hasOne(models.user_personal_detail);
      this.hasMany(models.user_resume_type);
      this.hasMany(models.user_experience_detail);
      this.hasMany(models.user_educational_detail);
      this.hasMany(models.user_skill_detail);
      this.hasMany(models.user_language_detail);
      this.hasOne(models.user_additional_detail);
      this.hasOne(models.user_aboutme_detail);
      this.hasOne(models.user_privacy_detail);
      this.hasMany(models.company_profile_info);
      this.hasMany(models.individual_jobseeker_dashboard);
      this.hasMany(models.job_listing);
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
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
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
