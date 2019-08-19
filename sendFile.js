const path = require('path'); // put the native modules 1st
const express = require('express');
const app = express();

//app comes with a use method
// app.use() takes 1 arg for now
// 1. the middleware you want to run
// You can have as many of these up as you like
// The world has access to this becarful
app.use(express.static(`public`));

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/node.html'));
});
app.all('*', (req, res) => {
  res.send(`<h1>Sorry, this page does not exit.</h1>`)
})


app.listen(3000);
console.log('Server is listening at PORT: 3000.');