const express = require('express');

const router = express.Router();
const { authTest, auth, register, chkLogin } = require('../controller/auth');
//이걸 왜 또 쓰신걸까?
const authMiddleware = require('../auth-middleware/auth');
router.get('/hi', authMiddleware, authTest);
router.post('/register', register);
router.post('/auth', auth);
router.get('/chkLogin', authMiddleware, chkLogin);

router.get('/replyList/:postID');

router.post('/replyPost');

router.patch('/replyDelete');
module.exports = router;
