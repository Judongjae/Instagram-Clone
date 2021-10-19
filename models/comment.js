const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  postID: {
    type: String,
  },
  replyAuthorID: {
    type: String,
  },
  replyNickname: {
    type: String,
  },
  replyComment: {
    type: String,
  },
  replyDate: {
    type: String,
  },
  replyDel: {
    type: Boolean,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
