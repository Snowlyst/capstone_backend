"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_aboutme_details", [
      {
        user_id: 2,
        name: "John Tan",
        contact_number: "91274611",
        email: "John@test.com",
        address: "Blk 460C Sengkang West Road #01-01 Singapore 793460",
        date_of_birth: "01/01/1970",
        nationality: "Singaporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        name: "Jack Tay",
        contact_number: "97783711",
        email: "Jack@test.com",
        address: "Blk 23 Tuas South Street 1 #01-12 Singapore 637620",
        date_of_birth: "01/01/1971",
        nationality: "Sinagporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        name: "May Lim",
        contact_number: "97821471",
        email: "May@test.com",
        address: "Blk 5 Bedok South Avenue 2 #01-03 Singapore 460005",
        date_of_birth: "01/01/1972",
        nationality: "Sinagporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        name: "Jean Lim",
        contact_number: "96532651",
        email: "Jean@test.com",
        address: "Blk 8B Barker Road #01-04 Singapore 309918",
        date_of_birth: "01/01/1973",
        nationality: "Sinagporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        name: "Mandy Chong",
        contact_number: "86321751",
        email: "Mandy@test.com",
        address: "Blk 519 Canberra Drive #01-05 Singapore 768124 ",
        date_of_birth: "01/01/1974",
        nationality: "Sinagporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 7,
        name: "Ben Foster",
        contact_number: "86361536",
        email: "B_Foster@test.com",
        address: "Blk 40 Tuas South Street 1 #01-06 Singapore 637620",
        date_of_birth: "01/01/1975",
        nationality: "Sinagporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 8,
        name: "Peter Leong",
        contact_number: "93651251",
        email: "Peter@test.com",
        address: "10, Nassim Road #01-07 Singapore 258439",
        date_of_birth: "01/01/1976",
        nationality: "Sinagporean",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_aboutme_details", null, {});
  },
};
