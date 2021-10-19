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

postSchema.virtual("postID").get(function() {
  return this._id.toHexString();
});

postSchema.set("toJSON", {
  virtuals: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
