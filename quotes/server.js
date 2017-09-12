/*  quotes nodejs / express server
    leif anderson 9/11/17
*/

// dependencies
//
let express = require('express');
let body_parser = require('body-parser');
let mongoose = require('mongoose');
let path = require('path');
let port = 8000;
let app = express();

// ready for forms
//
app.use(body_parser.urlencoded({ extended: false}));

// mongo db
//
mongoose.connect('mongodb://localhost/quotes');
var quote_schema = new mongoose.Schema({
  name: String,
  quote: String
});
var Quote = mongoose.model('quotes', quote_schema);

// point to views
//
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  return response.render('welcome');
});

app.get('/quotes', function(request, response) {
  Quote.find({}, function(err, results) {
  if (err) { console.log(err); }
  else
    return response.render('quotes', { quotes: results});
  });
});

app.post('/quotes', function(request, response) {
  Quote.create(request.body, function(err) {
    if (err) { console.log(err); }
  else
    return response.redirect('/quotes')});
});

app.listen(port);
