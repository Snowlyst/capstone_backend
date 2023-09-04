"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert("users", [
      {
        user_role_id: 1,
        approved_by_admin: true,
        user_name: "Admin",
        first_name: "Admin",
        last_name: "Admin",
        email: "Admin@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "John",
        first_name: "John",
        last_name: "Tan",
        email: "John@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "Jack",
        first_name: "Jack",
        last_name: "Tay",
        email: "Jack@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "May",
        first_name: "May",
        last_name: "Lim",
        email: "May@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "Jean",
        first_name: "Jean",
        last_name: "Lee",
        email: "Jean@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "Mandy",
        first_name: "Mandy",
        last_name: "Chong",
        email: "Mandy@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "Ben",
        first_name: "Ben",
        last_name: "Foster",
        email: "B_Foster@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_role_id: 2,
        approved_by_admin: true,
        user_name: "Peter",
        first_name: "Peter",
        last_name: "Leong",
        email: "Peter@test.com",
        avatar_url: "null",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("users", null, {});
  },
};
