const express = require("express");
const router = express.Router();
const comment = require("../controller/comment");

router.get("/hi", auth);

module.exports = router;
