const express = require('express');
const app = express();
/*
Express is two things
1. Router
2. Middleware that comprises a webframework
Middleware is what happens between the Req, and the Res
REQ-------MIDDLEWARE------RES
a middleware function is any function has access to the req, res, or next object

REQ-------MIDDLEWARE------RES
1. Request comes in.
2. We need to validate the user, sometimes
3. We need to store some things in the DB.
4. If there is data from the user we need to parse it and store it
5. Res
*/
const validateUser = (req, res, next) => {
  res.locals.validated = true;
  console.log('Validated Ran!');
  next();
};


// This will run validate user on all methods and all paths 
app.use(validateUser);

/*
    This will run validateUser on all methods but only at the /admin path
app.use('/admin', validateUser);

    This will run validateUser on /, only on get methods...
app.get('/', validateUser);

    ...And it is really this...
app.get('/', (req, res, next) => {
  res.locals.validated = true;
  console.log('Validated Ran!');
  next();
})
*/



app.get('/', (req, res, next) => {
  res.send(`<h1>Main Page</h1>`);
  console.log(res.locals.validated);
});

app.get('/admin', (req, res) => {

})

app.listen(3000);


console.log(`The Server is Listening at PORT: 3000.`);