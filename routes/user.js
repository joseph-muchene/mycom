const express = require("express");
const router = express.Router();
const { getUser, read } = require("../controller/user");
router.get("/user/:userId", read);
router.param("userId", getUser);

module.exports = router;
