'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('Songs', 'PlaylistId', Sequelize.INTEGER );
  
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.removeColumn('Songs', 'PlaylistId');
  }
};
