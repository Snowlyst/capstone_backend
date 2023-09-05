"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_personal_details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      identification_number: {
        type: Sequelize.STRING,
      },
      mobile_number: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.STRING,
      },
      cancer_diagnosis: {
        type: Sequelize.STRING,
      },
      active_treatment: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      housing_type: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      unit_number: {
        type: Sequelize.STRING,
      },
      living_arrangement: {
        type: Sequelize.STRING,
      },
      current_work_status: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      monthlySalary: {
        type: Sequelize.STRING,
      },
      cancer_impact_on_finance: {
        type: Sequelize.STRING,
      },
      date_of_last_unemployment: {
        type: Sequelize.STRING,
      },
      readiness_to_rtw: {
        type: Sequelize.STRING,
      },
      time_frame_to_rtw: {
        type: Sequelize.STRING,
      },
      employed_readiness_scale: {
        type: Sequelize.STRING,
      },
      current_health_status: {
        type: Sequelize.STRING,
      },
      current_physical_health_status: {
        type: Sequelize.STRING,
      },
      current_mental_health_status: {
        type: Sequelize.STRING,
      },
      physical_barriers_to_rtw: {
        type: Sequelize.STRING,
      },
      psychosocial_barriers_to_rtw: {
        type: Sequelize.STRING,
      },
      additional_information: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_personal_details");
  },
};
