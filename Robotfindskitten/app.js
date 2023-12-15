var express = require('express');
var fs = require('fs').promises;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//registering the end point for communication with the client
app.post('/api/register_highscore', async (req, res) => {
    const highscores = JSON.parse(await fs.readFile("highscores.json"));
    const prevScore = highscores[req.body.initials] ?? Number.MAX_VALUE;
    highscores[req.body.initials] = Math.min(prevScore, req.body.score);
    await fs.writeFile("highscores.json", JSON.stringify(highscores));
    res.send(highscores);
});

module.exports = app;
