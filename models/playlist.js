'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    namePlaylist: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.Song)
  };
  return Playlist;
};