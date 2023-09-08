"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class application_stage extends Model {
    static associate(models) {
      this.belongsTo(models.individual_jobseeker_dashboard, {
        foreignKey: "id",
      });
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
