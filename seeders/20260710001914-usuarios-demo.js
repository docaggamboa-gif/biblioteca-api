'use strict';

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
   await queryInterface.bulkInsert(
    "usuarios",
    [
    {
    nombre:"Juan",
    correo:"juan12345@gmail.com"
    },
    {
    nombre:"María",
    correo:"maria34567@gmail.com"
    }
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete(
    "usuarios",{
          nombre:"Juan",

    },
    null,
    {}
    );
  }
};
