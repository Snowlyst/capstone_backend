"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_privacy_details", [
      {
        user_id: 2,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 7,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 8,
        searchable: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_privacy_details", null, {});
  },
};
