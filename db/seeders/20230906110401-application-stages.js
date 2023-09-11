"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("application_stages", [
      {
        stage: "Application Sent",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Pending Interview",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Rejected",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        stage: "Hired",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("application_stages", null, {});
  },
};
