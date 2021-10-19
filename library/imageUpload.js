const multer = require('multer');
const multerS3 = require('multer-s3-transform');
const sharp = require('sharp');
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
    shouldTransform: function (req, file, cb) {
      cb(null, /^image/i.test(file.mimetype));
    },
    transforms: [
      {
        id: 'original',
        key: function (req, file, cb) {
          cb(null, 'image-original.jpg');
        },
        transform: function (req, file, cb) {
          //Perform desired transformations
          cb(null, sharp().resize(600, 600).withMetadata());
        },
      },
    ],
  }),
});
module.exports = upload;
