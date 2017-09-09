/*  server.js - test case - my first node server ...
    leif anderson 9/7/17
*/
let express = require('express');
let app = express();

// routes
app.get('/', function(request, response) {
  response.render('index.ejs');
});

// always last
app.listen(8000, function(){ console.log("Listening on PORT: 8000 ....")});
