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
    const permisos = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM permisos`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const relaciones = [];

    // Administrador (id=1)
    permisos.forEach((permiso) => {
      relaciones.push({
        rol_id: 1,
        permiso_id: permiso.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    // Usuario (id=2)
    const consultarUsuario = permisos.find(
      (p) => p.nombre === "usuario.consultar"
    );

    relaciones.push({
      rol_id: 2,
      permiso_id: consultarUsuario.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert("rol_permisos", relaciones);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
        await queryInterface.bulkDelete("rol_permisos", null, {});

  }
};
