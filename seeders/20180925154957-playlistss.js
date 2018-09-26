'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Playlists', 
      [
        {
          namePlaylist: 'K-POP',
          description: 'any description',
          createdAt: '2018-09-24 21:56:33.499896+07',
          updatedAt: '2018-09-24 21:56:33.499896+07'
        },
        {
          namePlaylist: 'Jazz',
          description: 'any description',
          createdAt: '2018-09-24 21:56:33.499896+07',
          updatedAt: '2018-09-24 21:56:33.499896+07'
        },
        {
          namePlaylist: 'Country',
          description: 'any description',
          createdAt: '2018-09-24 21:56:33.499896+07',
          updatedAt: '2018-09-24 21:56:33.499896+07'
        },
        {
          namePlaylist: 'EDM',
          description: 'any description',
          createdAt: '2018-09-24 21:56:33.499896+07',
          updatedAt: '2018-09-24 21:56:33.499896+07'
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Playlists', null, {});
    
  }
};
