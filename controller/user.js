const User = require("../models/user_model.js");

exports.getUser = async (req, res, next, id) => {
  try {
    await User.findById(id).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          msg: "user not found",
        });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    if (err) {
      console.log(err.message);
    }
  }
};

exports.read = (req, res) => {
  req.user.hashed_password = undefined;
  req.user.salt = undefined;
  return res.json(req.user);
};
