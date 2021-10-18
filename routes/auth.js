const express = require('express');
const { authTest, auth, register, chkLogin} = require('../controller/auth');
const authMiddleware = require('../auth-middleware/auth');
router.get('/hi', authMiddleware, authTest);
router.post('/register', register);
router.post('/auth', auth);
router.get('/chkLogin', authMiddleware, chkLogin);

module.exports = router;
