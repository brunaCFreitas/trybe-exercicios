'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'pageQuantity', // quando quiser controlar a ordem
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  },
};