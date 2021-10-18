const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = new Schema({
  postID: {
    type: String,
  },
  userID: {
    type: String,
  },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
