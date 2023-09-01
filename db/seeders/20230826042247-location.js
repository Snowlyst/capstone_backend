"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("locations", [
      {
        name: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "East",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "North",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "North-East",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "West",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
