/* user.js

*/

let UserSchema = new mongoose.Schema({

})

UserSchema.pre('save', (next) => {
  this.password = bcrypt.hashSync(...)
  next();
})
