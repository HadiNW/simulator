'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.removeColumn('Playlists',  'rating');
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('Playlists', 'rating', Sequelize.FLOAT);
  }
};
