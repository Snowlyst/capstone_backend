"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company_profile_info extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.hasMany(models.job_listing, { foreignKey: "id" });
    }
  }
  Company_profile_info.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      approvalByAdmin: DataTypes.BOOLEAN,
      companyName: DataTypes.STRING,
      companyLogo: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      unitNumber: DataTypes.STRING,
      bannerUrl: DataTypes.STRING,
      establishmentDate: DataTypes.STRING,
      websiteUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "company_profile_info",
      underscored: true,
    }
  );
  return Company_profile_info;
};
