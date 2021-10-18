const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  postingTitle: {
    type: String,
  },
  postingAuthor: {
    type: String,
  },
  postingComment: {
    type: String,
  },
  postingImgUrl: {
    type: String,
  },
  postingDate: {
    type: String,
  },
  postingTag: {
    type: String,
  },
  postingDel: {
    type: Boolean,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
