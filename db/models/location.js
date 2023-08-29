"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    static associate(models) {
      this.hasMany(models.job_listing);
      this.hasMany(models.company_profile);
    }
  }
  location.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
