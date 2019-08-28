// NODEJS IS the language
// Express is node - a node module
const express = require('express');
//An app is teh express function (createApplication indside the Express module)
// invoked and is an Express application
const app = express();

// Serve up static files! Only one line of code take that Node.js
app.use(express.static('public'));

// All is a  method, and it takes two args:
// 1. Route
// 2. Callback to run i the route is requested
// app.all('*', (req, res) => {
  //Express handles the basic headers
  //Express handles the end
  //We handle the inbetween
//   res.send('<h1>This is the Home Page.</h1>');
// })
// app object has a few methods - these are some of the main ones
// HTTP verbs REST verbs
//  Default for all browsers - Requests a represention of 
//the specified resource - Get should only retrieve data
// 1. app.get() READ as a CRUD verb 
// The POST method is used to submit an entry to the specifed resource
// often causing a change in state or side effects on the server
// 2. app.post() CREATE as a CRUD verb
// The DELETE method deletes the specified resource.
// 3. app.delete() DELETE as a CRUD verb
// The PUT method replaces all current representations of the 
// target resource with the request payload
// 4. app.put() - UPDATE as a CRUD verb
// 4b. app.patch - UPDATE for part/parts
// 5. app.all() - I will accept any method

//All app.methods() take two args:
// 1. path -as a string
// 2. callback to run if an HTTP request that matches THIS verb
// is made the path in #1
//app dot all will grab them all if path matches
app.all('/', (req, res) => res.send('Welcome to the Home Page!'));

app.get('/', (req, res) => {
  res.send(`<h1>Welcome the the GET page!</h1>`)
});
app.post('/', (req, res) => {
  res.send(`<h1>Welcome the the POST page!</h1>`)
});
app.delete('/', (req, res) => {

});
app.put('/', (req, res) => {

});
app.listen(3000, () => console.log('The server is listening on Port: 3000.'));