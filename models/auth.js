const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
  userEmail: {
    type: String,
  },
  userNickname: {
    type: String,
  },
  userPassword: {
    type: String,
  },
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
