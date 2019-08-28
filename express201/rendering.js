const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
// serve up static files
app.use(express.static('public'));
// parse json and urlencoded data into the req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.set() takes to args: - check docs
//1. name or key
//2. value
// ejs version
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
// handlebar version
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// pug version
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


/************* For res.render() to run
1. Express as we know it happens. This File.
2. We define a view engine
    - EJS
    - Mustache
    - Handlebars
    - Jade/Pug
3. inside one of our routes we have a res.render
4. we pass it two things
  1. the file to use
  2. the data to send to that file
5. Express uses the node module for our specified view engine
    and parses the file.
      That means, it takes teh HTML/JS/CSS and combines it with
      whatever 'node' there is in the file
6. The final result of this process is a compiled product of the
      things that the browser can read HTML, CSS, JS
*/
// res.send('Sanity Check'); - Sends  text/string
// res.json({ message: 'Sanity Check'}); - Sends a json object
app.get('/', (req, res, next) => {
  res.render('index'); 
});

app.listen(3000);
console.log(`The Server is listening on PORT: 3000.`);