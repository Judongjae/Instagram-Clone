const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');
router.get('/hi', auth);

module.exports = router;
