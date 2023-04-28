'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      bloodGroup: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      phno: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      medicalHistory: {
        type: Sequelize.STRING
      },
      canDonate: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};