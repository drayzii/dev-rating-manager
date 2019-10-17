/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Groups',
    [
      {
        lf: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        lf: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Groups', null, {}),
};
