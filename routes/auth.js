const express = require("express");
const router = express.Router();
const { signUp, signin, signout } = require("../controller/auth");

router.post("/register", signUp);
router.post("/login", signin);
router.get("/signout", signout);
module.exports = router;
