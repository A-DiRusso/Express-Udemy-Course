var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = ``;
const apiBaseUrl = `http://api.themoviedb.org/3`;
const nowPlaying = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
const imageBaseUrl = `http://image.tmdb.org/t/p/w300`;

router.use((req, res, next) =>{
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  /*
  request.get takes two args:
  1. the URl to http "get"
  2. the callback to run when the http response comes back. this takes 3 args:
  1. error if any
  2. http response
  3 json/data that the server sent back
  */
  request.get(nowPlaying, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render('index', {parsedData: parsedData.results});
  })
  // movie/:id is a wild card route
  // that means that :id is going to be stored in...
  router.get('/movie/:id', (req, res, next) => {
    // res.json(req.params.id); 
    const movieId = req.params.id;
    const movieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;
    // res.send(thisMovieUrl);
    request.get(movieUrl, (error, response, movieData) => {
      const parsedData = JSON.parse(movieData);
      res.render('single-movie', {
        parsedData
      });
    })
    }) 
    router.post('/search', (req, res, next) => {
      // res.send('Sanity Check');
      const userSearchTerm = encodeURI(req.body.movieSearch);
      const cat = req.body.cat;
      const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`;
      request.get(movieUrl, (error, response, movieData) => {
        let parsedData = JSON.parse(movieData);
        if(cat=="person"){
          parsedData.results = parsedData.results[0].known_for;
        }
        res.render('index', {
          parsedData: parsedData.results,
        })
      })
    })
});

module.exports = router;
