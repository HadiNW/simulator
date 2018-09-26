const express = require('express');
const router = express.Router();
const Models = require('../models/')

router.get('/', (req, res) => {
    Models.Song.findAll({order: [['rating', 'DESC']]})
        .then((songs) => {
            res.render('songs/', {songs: songs})
        })
        .catch((err) => {
            res.send(err)
        })    
})

router.post('/', (req, res) => {   
    Models.Song.create({
        title: req.body.title,
        singerName: req.body.singerName,
        releasedYear: req.body.releasedYear,
        rating: req.body.rating,
        genre: req.body.genre
    })
    .then(() => {
        res.redirect('songs/')
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/:id/edit', (req, res) => {
    Models.Song.findOne({where: {id: req.params.id}})
        .then((song) => {
            res.render('songs/edit', {song: song})
        })
        .catch((err) => {
            res.send(err)
        })
})

router.post('/:id/edit', (req, res) => {
    let rating;
    let year = req.body.releasedYear
    if (req.body.rating ===''){
        rating = 1
    }
    if (req.body.releasedYear === ''){
        year = new Date().getFullYear()
    } 
    Models.Song.update({
        title: req.body.title,
        singerName: req.body.singerName,
        releasedYear: year,
        rating: rating,
        genre: req.body.genre
    }, {where: {id: req.params.id}})
    .then(() =>{
        res.redirect('/songs/')
    })
    .catch((err) => {
        res.send(err)
    })
})

module.exports = router