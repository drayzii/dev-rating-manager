'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'user',
        },
      },
      quality: {
        type: Sequelize.JSONB,
      },
      quantity: {
        type: Sequelize.JSONB,
      },
      initiative: {
        type: Sequelize.JSONB,
      },
      communication: {
        type: Sequelize.JSONB,
      },
      professionalism: {
        type: Sequelize.JSONB,
      },
      integration: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ratings');
  },
};