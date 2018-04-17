// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var ejs = require('ejs');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'ejs');
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render('index.ejs', {name: 'No File', size: 0});
});

app.post('/upload', upload.single('myFile'), (req, res) => {
  res.render('index.ejs', {name: req.file.originalname, size: req.file.size});
  
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
