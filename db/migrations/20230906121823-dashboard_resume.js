"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dashboard_resumes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_resume_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "user_resume_types",
          key: "id",
        },
      },
      individual_jobseeker_dashboard_id: {
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("dashboard_resumes");
  },
};
