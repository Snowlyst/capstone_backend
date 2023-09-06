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
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
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
