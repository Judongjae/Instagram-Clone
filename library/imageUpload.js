const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'halimg',
    key: function (req, file, cb) {
      cb(null, `${Date.now()}${file.originalname}`); //use Date.now() for unique file keys
    },
  }),
});

module.exports = upload;
