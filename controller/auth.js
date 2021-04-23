require("dotenv").config();

//model
const User = require("../models/user_model");
//auth
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//register a user
exports.signUp = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        msg: "Email is already taken",
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
};

//signin a user
exports.signin = (req, res) => {
  //check if the user exists
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        msg: "Invalid user credentials",
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match",
      });
    }
    // generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // return response with user and token to frontend client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth", //cookie parser
});
