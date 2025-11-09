const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  online: { type: Boolean, default: false },
  socketId: String
});

module.exports = mongoose.model('User', UserSchema);
