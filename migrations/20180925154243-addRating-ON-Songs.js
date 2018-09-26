'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('Songs','rating', 
                          { 
                            type: Sequelize.FLOAT,
                            defaultValue:1
                           });
  
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.removeColumn('Songs', 'rating');
    
  }
};
