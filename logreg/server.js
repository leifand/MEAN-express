// dependencies
//
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const port = 8000;

// use express
//
app = express();

// ihartbodyparser
//
app.use(bodyParser.urlencoded({ extended: true }))

// set up views and templating engine
//
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// connect to mongoose
//
const connection = mongoose.connect("mongodb://localhost/logreg_db")


app.listen(port, () => { console.log('PORT', port)})
