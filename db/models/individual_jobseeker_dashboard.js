'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class individual_jobseeker_dashboard extends Model {
    static associate(models) {
     this.belongsTo(models.user, { foreignKey: "userId" });
     this.belongsTo(models.job_listing, { foreignKey: "jobListingId" });
    }
  }
  individual_jobseeker_dashboard.init({
    jobListingId: {
      type:DataTypes.INTEGER,
      references:{
        model:"job_listing",
        key:"id"
      }
    },
    userId:{
      type:DataTypes.INTEGER,
      references: {
          model: "user",
          key: "id",
        },
    },
    status: DataTypes.STRING,
    interviewDate: DataTypes.STRING,
    interviewTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'individual_jobseeker_dashboard',
  });
  return individual_jobseeker_dashboard;
};