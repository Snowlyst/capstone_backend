"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_educational_details", {
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
      institute: {
        type: Sequelize.STRING,
      },
      graduation_date: {
        type: Sequelize.STRING,
      },
      qualification: {
        type: Sequelize.STRING,
      },
      institute_location: {
        type: Sequelize.STRING,
      },
      field_of_study: {
        type: Sequelize.STRING,
      },
      major: {
        type: Sequelize.STRING,
      },
      grade: {
        type: Sequelize.STRING,
      },
      award: {
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
    await queryInterface.dropTable("user_educational_details");
  },
};
