'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          args: true,
          msg: 'please fill'
        }
      }
      
    },
    singerName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill'
        }
      }
    },
    releasedYear: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'only number'
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill'
        }
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill'
        },
        min : 1,
        max: 5
      }
    }
  }, {
    hooks: {
      beforeValidate: (song, options) => {
        if (song.rating === ''){
          song.rating = 1
        }

        if (song.releasedYear === ''){
          song.releasedYear = new Date().getFullYear()
        } 
        
      }
    }
  });
  Song.associate = function(models) {
    Song.hasMany(models.Playlist)
  };
  return Song;
};