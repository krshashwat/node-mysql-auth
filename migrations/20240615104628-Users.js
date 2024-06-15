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

    await queryInterface.createTable(
      'Users',
      {
        id: {
          type: Sequelize.INTEGER(10),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(500),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          default: Sequelize.NOW,
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DATE,
          default: Sequelize.NOW,
          allowNull: true,
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Users');
  }
};
