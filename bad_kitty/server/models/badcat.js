/*  badcat.js
    leif anderson 9/14/17
*/
const mongoose = require('mongoose')

// connect to mongoose
//
const connection = mongoose.connect("mongodb://localhost/badcat_db")

// BAD CAT schema!!!
//
const BadCatSchema = new mongoose.Schema({
  name: String,
  bad: Boolean,
  lives: String,
  offences : {},
  weight: Number
})

// mongoose is sooooooo kewl
//
const BadCat = mongoose.model('BadCat', BadCatSchema)
