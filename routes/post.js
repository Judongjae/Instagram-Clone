const express = require('express');
const router = express.Router();
const {
  posting,
  postList,
  postDetail,
  postModify,
  postDelete,
} = require('../controller/post');
const upload = require('../library/imageUpload');
const authMiddleware = require('../auth-middleware/auth');
//모든 게시글 불러오기
router.get('/postList', postList);
//상세 게시글 조회하기
router.get('/inspect/:postID', postDetail);
//게시글 등록하기
router.post('/posting', upload.single('img'), posting);
//게시글 수정
router.patch('/postModify', authMiddleware, postModify);
//게시글 삭제
router.patch('/postDelete', authMiddleware, postDelete);

module.exports = router;
