"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_additional_details", [
      {
        user_id: 2,
        expected_salary: "4000",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        expected_salary: "4500",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        expected_salary: "5000",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        expected_salary: "5500",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        expected_salary: "4000",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 7,
        expected_salary: "4500",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 8,
        expected_salary: "5000",
        preferred_work_location: "Central",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_additional_details", null, {});
  },
};
