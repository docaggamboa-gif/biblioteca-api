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
   await queryInterface.bulkInsert("permisos", [
      {
        nombre: "usuario.consultar",
        descripcion: "Consultar usuarios",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "usuario.crear",
        descripcion: "Crear usuarios",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "usuario.actualizar",
        descripcion: "Actualizar usuarios",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "usuario.eliminar",
        descripcion: "Eliminar usuarios",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "rol.consultar",
        descripcion: "Consultar roles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "rol.crear",
        descripcion: "Crear roles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "rol.actualizar",
        descripcion: "Actualizar roles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "rol.eliminar",
        descripcion: "Eliminar roles",
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
        await queryInterface.bulkDelete("permisos", null, {});

  }
};
