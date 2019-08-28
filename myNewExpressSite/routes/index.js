var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date(1969,6,20);
  // res.set('Date', date);//how to set the headers
  // res.set('Cashe-Control', 'no-store') // Only for development will not store the cashe
  // res.set('Content-Type', 'text/html')
  // res.type('text/html'); Same as above :)
  // fresh and stale 
  // console.log(req.fresh); is the req cashe fresh or stale
  // console.log(req.stale);
  // console.log(req.accepts('html'));// boolean for what req accepts
  res.render('index', { title: 'Express' });
});

module.exports = router;
