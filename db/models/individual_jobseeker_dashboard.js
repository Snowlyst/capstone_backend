"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class individual_jobseeker_dashboard extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.job_listing, { foreignKey: "jobListingId" });
      this.belongsTo(models.application_stages, {
        foreignKey: "status",
      });
      this.hasOne(models.user_resume_type, {
        foreignKey: "id",
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
      status: {
        type: DataTypes.INTEGER,
        references: {
          model: "application_stage",
          key: "id",
        },
      },
      reasonIfRejected: {
        type: DataTypes.STRING,
      },
      interviewDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "individual_jobseeker_dashboard",
    }
  );
  return individual_jobseeker_dashboard;
};
