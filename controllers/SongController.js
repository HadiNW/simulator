const Models = require('../models/index')
class SongController{
    static showAll(req, res){
        Models.Song.findAll({order:[['rating', 'DESC']]})
            .then((songs) => {
                res.render('songs/', {songs: songs})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static addSongForm(req, res){
        res.render('songs/add');
    }

    static addSong(){
        Models.Song.create({

        })
    }
}

module.exports = SongController