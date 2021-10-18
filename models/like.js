const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = new Schema({
  //스키마를 작성해 주세욥
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
