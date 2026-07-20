'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        await queryInterface.createTable("rol_permisos", {

            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            rol_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "roles",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },

            permiso_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "permisos",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }

        });

        await queryInterface.addConstraint("rol_permisos", {
            fields: ["rol_id", "permiso_id"],
            type: "unique",
            name: "uk_rol_permiso"
        });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
            await queryInterface.dropTable("rol_permisos");

  }
};
