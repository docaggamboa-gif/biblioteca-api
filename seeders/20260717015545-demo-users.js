'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const password = await bcrypt.hash("Admin123*", 10);

    await queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        email: "admin@biblioteca.com",
        password,
        rol_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "usuario",
        email: "usuario@biblioteca.com",
        password,
        rol_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
        await queryInterface.bulkDelete("Users", null, {});

  }
};
