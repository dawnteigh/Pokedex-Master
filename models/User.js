const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  pokedex: [{
    type: Schema.Types.ObjectId,
    ref: 'Pokemon'
  }]

})

module.exports = mongoose.model('User', UserSchema);