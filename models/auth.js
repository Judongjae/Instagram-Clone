const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
  userImgUrl: {
    type: String,
  },
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

authSchema.virtual("userID").get(function() {
  return this._id.toHexString();
});
authSchema.set("toJSON", {
  virtuals: true,
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
