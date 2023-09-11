"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dashboard_job_listings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_listing_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "job_listings",
          key: "id",
        },
      },
      dashboard_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "individual_jobseeker_dashboards",
          key: "id",
        },
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dashboard_job_listings");
  },
};
