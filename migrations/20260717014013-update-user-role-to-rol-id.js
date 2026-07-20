'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Users', { id: Sequelize.INTEGER });
     */
     // Eliminar la columna rol
        await queryInterface.removeColumn("Users", "role");

        // Agregar la nueva columna rol_id
        await queryInterface.addColumn("Users", "rol_id", {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "roles",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT"
        });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn("Users", "rol_id");

        await queryInterface.addColumn("Users", "role", {
            type: Sequelize.STRING,
            allowNull: false
        });
    
  }
};
