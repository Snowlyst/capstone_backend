'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("job_listings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "job_categories",
          key: "id",
        },
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "company_profile_infos",
          key: "id",
      },
    },
      approval_by_admin: {
        type: Sequelize.BOOLEAN,
      },
      comment_on_not_approved: {
        type: Sequelize.STRING,
      },
      employment_type: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      job_location: {
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
    await queryInterface.dropTable('job_listings');
  }
};