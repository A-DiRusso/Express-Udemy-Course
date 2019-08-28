const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
//this will staticly host the dir public-ajax
app.use(express.static('public-ajax'));
//body-parses application/json for us
app.use(express.json());
// This will parse with the querystring
app.use(express.urlencoded({ extended: false }));
// Setting to true will use the qs library


app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.json('TEST:)');
});


app.listen(3000, () => console.log(`Server listening at PORT: 3000.`));