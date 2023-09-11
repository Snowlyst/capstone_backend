"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("individual_jobseeker_dashboards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      job_listing_id: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "job_listings",
          key: "id",
        },
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
      resume_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "user_resume_types",
          key: "id",
        },
      },
      application_stage_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "application_stages",
          key: "id",
        },
      },
      interview_date: {
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
    await queryInterface.dropTable("individual_jobseeker_dashboards");
  },
};
