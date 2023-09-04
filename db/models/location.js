"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      this.hasMany(models.job_listing);
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "location",
      underscored: true,
    }
  );
  return Location;
};
