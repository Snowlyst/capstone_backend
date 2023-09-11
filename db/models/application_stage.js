"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class application_stage extends Model {
    static associate(models) {
      this.hasMany(models.individual_jobseeker_dashboard);
    }
  }
  application_stage.init(
    {
      stage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "application_stage",
      underscored: true,
    }
  );
  return application_stage;
};
