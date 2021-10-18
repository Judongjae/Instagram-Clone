const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  postID: {
    type: String,
  },
  replyNickname: {
    type: String,
  },
  replyComment: {
    type: String,
  },
  replyDel: {
    type: Boolean,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

//virtual 주기
module.exports = Comment;
