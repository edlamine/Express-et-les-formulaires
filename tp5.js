"use strict";
let movies = require('./movies');
movies.load('movies.json');
console.log(movies.list());

let express = require('express');
let mustache = require('mustache-express');
let app = express();
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');

    app.get('/movie-details/:id', (req, res) => {
    res.render('movie-details', movies.read(req.params.id));
});
app.listen(3000, () => console.log('movie server at http://localhost:3000'));