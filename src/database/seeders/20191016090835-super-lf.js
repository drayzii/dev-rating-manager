/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        googleId: '107620012741405968837',
        firstName: 'Super',
        lastName: 'LF',
        email: 'marveldev53@gmail.com',
        role: 'Super LF',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jonathan',
        lastName: 'Aurugai',
        email: 'jonathan@gmail.com',
        role: 'Engineer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Titus',
        lastName: 'Thumbi',
        email: 'tito@gmail.com',
        role: 'Engineer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'first',
        lastName: 'lf',
        email: 'lf1@gmail.com',
        role: 'LF',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Wiliam',
        lastName: 'Vedastus',
        email: 'willy@gmail.com',
        role: 'Engineer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        googleId: '108282791791495231796',
        firstName: 'Amily',
        lastName: 'Kassim',
        email: 'amily.kassim@andela.com',
        role: 'LF',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'second',
        lastName: 'lf',
        email: 'lf2@gmail.com',
        role: 'LF',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
