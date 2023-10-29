"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_personal_detail extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  User_personal_detail.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      identificationNumber: DataTypes.STRING,
      mobileNumber: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      cancerDiagnosis: DataTypes.STRING,
      activeTreatment: DataTypes.STRING,
      gender: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      housingType: DataTypes.STRING,
      streetAddress: DataTypes.STRING,
      unitNumber: DataTypes.STRING,
      livingArrangement: DataTypes.STRING,
      currentWorkStatus: DataTypes.STRING,
      occupation: DataTypes.STRING,
      monthlySalary: DataTypes.STRING,
      cancerImpactOnFinance: DataTypes.STRING,
      dateOfLastEmployment: DataTypes.STRING,
      readinessToRtw: DataTypes.STRING,
      timeFrameToRtw: DataTypes.STRING,
      employmentReadinessScale: DataTypes.STRING,
      currentHealthStatus: DataTypes.STRING,
      currentPhysicalHealthStatus: DataTypes.STRING,
      currentMentalHealthStatus: DataTypes.STRING,
      physicalBarriersToRtw: DataTypes.STRING,
      psychosocialBarriersToRtw: DataTypes.STRING,
      additionalInformation: DataTypes.STRING,
      linkedIn: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_personal_detail",
      underscored: true,
    }
  );
  return User_personal_detail;
};
