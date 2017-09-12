// ihartexpress
//
let express = require('express');
let session = require('express-session');
let app = express();

let body_parser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// session so power
//
app.use(session({ secret: 'why do you hate america', cookie: { maxAge: 60000 }}));
app.use(body_parser.urlencoded({ extended: true }));

// routes
//
app.get('/', function(request, result) {
  return result.render('index');
})

app.get('/result', function(request, result) {
  console.log("FUCK YES");
})

// redirects
//
app.post('/users', function(request, result) {
    console.log("POST DATA", request.body);
    var user = request.body;
    console.log("user", user)
    console.log(user.name)
    return result.redirect('result', {user: user});
});

// run the server yay
//
app.listen(8000, function() {console.log(`PORT 8000 M*FUCKER`)});
