/*  server.js
    count assignment
    leif anderson 9/8/17
*/

// ihartexpress
//
let express = require('express');
let session = require('express-session');
let app = express();


// session so power
//
app.use(session({ secret: 'grumpy cat is life', cookie: { maxAge: 60000 }}));

// redirects
//
app.post
// routes
//
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Counter</h1>');
    res.write('<p>' + req.session.views + ' times </p>');
    res.end();
  }
  else {
    req.session.views = 1;
    res.end('Counter');
  }
})

// run the server yay
//
app.listen(8000, function() {console.log(`PORT 8000 M*FUCKER`)});
