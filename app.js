const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const songRouter = require('./routes/songs')
const playlistRouter = require('./routes/playlists')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', indexRouter);
app.use('/songs', songRouter);
// app.use('/playlists', playlistRouter);





const port = 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})