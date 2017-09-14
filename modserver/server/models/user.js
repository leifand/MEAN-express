const mongoose = require('mongoose')
const User = mongoose.model('User)')

class UsersController {

  index(req, res) {
    Users.find({}, (err, uswers) => {
      if(err){
        console.log(err);
      }
      res.render('index', { users: users })
    })
  }
}
