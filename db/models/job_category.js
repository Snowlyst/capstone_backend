'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job_category extends Model {
    static associate(models) {
      this.hasMany(models.job_category, {
        foreignKey: "jobCategoryId",
      });
    }
  }
  Job_category.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'job_category',
    underscored:true,
  });
  return Job_category;
};