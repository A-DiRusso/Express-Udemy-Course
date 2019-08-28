const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
  res.send("Sanity Check");
});

app.use((req, res, next) => {
  if (req.query.msg === 'fail') {
    res.locals.msg = 'Sorry. this username and password combination does not exitst.';
  } else {
    res.locals.msg = '';
  }
  next();
}); 

app.get('/login', (req, res, next) => {
  // the req object has a query property with a property of every key in the query string
  // the query string is where you put insecure data - jwtokens etc
  // console.log(req.query);
  res.render('login');
});

app.post('/process_login', (req, res, next) => {
  //req.body is made by url.encoded which parses the http message data
  const password = req.body.password;
  const username = req.body.username;
  //check the databse to see if users credentials are valid
  //Save there username in a cookie - stored on the browser - built in to express
  // You could also use sessions - stored on the server
  if (password === "x"){
    //res.cookie takes atleast 2 args
    //1. the name of the cookie
    //2. value to set it to
    res.cookie('username', username);
    //res.redirect takes one arg;
    //Where to send the browser
    res.redirect('/welcome');
  } else {
    // The "?" is a special character in a URL
    res.redirect('/login?msg=fail&test=hello');
  }
});

app.get('/welcome', (req, res, next) => {
  // req.cookies object will have a property for every named cookie
  // that has been set.
  res.render('welcome', {
    username: req.cookies.username,
  });
});

//In a route anytime something has a : in front of it it is a a wildcard which will match anything in that slot
app.get('/story/:id', (req, res, next) => {
  // the req.pramas object always exists 
  // it will have a property for each wildcard in the route
  res.send(`<h1>Story ${req.params.id}</h1>`)
});

// app.param takes two args 
// 1. param to look for in the route 
// 2. the callback to run(with the url) 
app.param('id', (req, res, next, id) => {
  console.log("Params called: ", id);
  // if id has something to do with stories...
  //if id has something to do with blog...
  next();
});

app.get('/statement', (req, res, next) => {
  //this will render the statement in the browser
  // res.sendFile(path.join(__dirname, 'userStatements/BankStatementChequing.png'));
  //app has a download method it takes two args:
  //1. filename
  //2. Optionally - What you wnat the filename to download as
  //3. Optionally - callback
  // download is setting the headers!
  // 1. content-disposition to attachment with a filename of the 2nd arg
  res.download(path.join(__dirname, 'userStatements/BankStatementChequing.png'), 'jimsStatement.png', () => {
    //if there is an error in sending the file the headers may already be set 
    // if(error){
    //   if(!res.headersSent){
    //     res.redirect('/download/error')
    //   }
    // }
    console.log(error);
  });
  
  // optionally 
  // res.attachment() only sets the headers
});

app.get('/logout', (req, res, next) => {
  //res.clearCookie() takes one arg the cookie to clear by name
  res.clearCookie('username');
  res.redirect('/login');
})

app.listen(3000);
console.log(`The server is listening on PORT: 3000`);