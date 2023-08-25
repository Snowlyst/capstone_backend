"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_skill_details", [
      {
        user_id: 2,
        skill: "Microsoft Excel",
        proficiency: "Advanced",
      },
      {
        user_id: 3,
        skill: "Cooking",
        proficiency: "Advanced",
      },
      {
        user_id: 4,
        skill: "Sewing",
        proficiency: "Begineer",
      },
      {
        user_id: 5,
        skill: "Microsoft Excel",
        proficiency: "Advanced",
      },
      {
        user_id: 6,
        skill: "Microsoft Excel",
        proficiency: "Advanced",
      },
      {
        user_id: 7,
        skill: "Microsoft Excel",
        proficiency: "Advanced",
      },
      {
        user_id: 8,
        skill: "Microsoft Excel",
        proficiency: "Advanced",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_skill_details", null, {});
  },
};
