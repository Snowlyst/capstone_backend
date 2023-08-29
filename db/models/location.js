"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    static associate(models) {
      this.hasMany(models.job_listing);
      this.hasMany(models.company_profile_info);
    }
  }
  location.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "location",
      underscored: true,
    }
  );
  return location;
};
