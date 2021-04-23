const mongoose = require("mongoose");
const uuid = require("uuid");
const crypto = require("crypto");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },
    email: {
      type: String,
      unique: "Email already exists",
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
      trim: true,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    salt: {
      type: String,
    },
    hashed_password: {
      type: String,
    },
    role: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid.v1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
