'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_personal_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{foreignKey:"userId"})
    }
  }
  user_personal_detail.init(
    {
      memberId: DataTypes.INTEGER,
      identificationNumber: DataTypes.STRING,
      mobileNumber: DataTypes.STRING,
      dateofBirth: DataTypes.STRING,
      cancerDiagnosis: DataTypes.STRING,
      activeTreatment: DataTypes.STRING,
      gender: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      housingType: DataTypes.STRING,
      address: DataTypes.STRING,
      unitNumber: DataTypes.STRING,
      livingArrangement: DataTypes.STRING,
      currentWorkStatus: DataTypes.STRING,
      occupation: DataTypes.STRING,
      cancerImpactOnFinance: DataTypes.STRING,
      dateOfLastUnemployment: DataTypes.STRING,
      ReadinessToRtw: DataTypes.STRING,
      timeFrameToRtw: DataTypes.STRING,
      employedReadinessScale: DataTypes.STRING,
      currentHealthStatus: DataTypes.STRING,
      currentPhysicalHealthStatus: DataTypes.STRING,
      currentMentalHealth: DataTypes.STRING,
      physicalBarriersToRtw: DataTypes.STRING,
      psychosocialBarriersToRtw: DataTypes.STRING,
      additionalInformation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_personal_detail",
      underscored: true,
    }
  );
  return user_personal_detail;
};