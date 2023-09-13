"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class individual_jobseeker_dashboard extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.job_listing, {
        foreignKey: "jobListingId",
      });
      this.belongsTo(models.application_stage, {
        foreignKey: "applicationStageId",
      });
      this.belongsToMany(models.user_resume_type, {
        through: "dashboard_resumes",
      });
    }
  }
  individual_jobseeker_dashboard.init(
    {
      jobListingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "job_listing",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      resumeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user_resume_type",
          key: "id",
        },
      },
      applicationStageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "application_stage",
          key: "id",
        },
      },
      interviewDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "individual_jobseeker_dashboard",
      underscored: true,
    }
  );
  return individual_jobseeker_dashboard;
};
