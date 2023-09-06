"use strict";

const fs = require("fs");
const csv = require("csv-parser");
// const photo = require("../models/photo");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream("./data/location.csv")
        .pipe(csv())
        .on("data", (data) => {
          results.push(data);
        })
        .on("end", () => {
          queryInterface
            .bulkInsert("job_listings", results)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              console.error(error);
              reject(error);
            });
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("job_listings", null, {});
  },
};
