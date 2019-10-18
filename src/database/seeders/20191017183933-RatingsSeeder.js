/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      {
        user: 2,
        quality: 2,
        quantity: 3,
        initiative: 1,
        communication: 1,
        professionalism: 1,
        integration: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 2,
        quality: 2,
        quantity: 3,
        initiative: 1,
        communication: 1,
        professionalism: 1,
        integration: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 2,
        quality: 2,
        quantity: 3,
        initiative: 1,
        communication: 1,
        professionalism: 1,
        integration: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Ratings', null, {}),
};
