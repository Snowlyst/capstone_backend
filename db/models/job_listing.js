"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job_listing extends Model {
    static associate(models) {
      this.belongsTo(models.job_category, { foreignKey: "jobCategoryId" });
      this.belongsTo(models.company_profile_info, { foreignKey: "companyId" });
      this.hasMany(models.individual_jobseeker_dashboard, { foreignKey: "jobListingId" });
    }
  }
  Job_listing.init(
    {
      jobCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "job_category",
          key: "id",
        },
      },
      companyId: {
        type: DataTypes.INTEGER,
        references: {
          model: "company_profile_info",
          key: "id",
        },
      },
      approvalByAdmin: DataTypes.BOOLEAN,
      commentOnNotApproved: DataTypes.STRING,
      employmentType: DataTypes.STRING,
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      jobLocation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "job_listing",
      underscored: true,
    }
  );
  return Job_listing;
};
