const express = require("express");
const { sendMail } = require("../controller/mail");
const router = express.Router();
const { getUser, read } = require("../controller/user");
router.get("/user/:userId", read);
router.post("/send", sendMail);
router.param("userId", getUser);

module.exports = router;
