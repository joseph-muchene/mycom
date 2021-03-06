//environment variables
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

const morgan = require("morgan");

//routes
const Auth = require("./routes/auth");
const User = require("./routes/user");
const Product = require("./routes/product");
const Category = require("./routes/category");
//database connection
const mongoose = require("mongoose");
//
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB connected!!!");
  })
  .catch((err) => {
    console.log(err.message);
  });

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

//route middlewares
app.use("/api", Auth);
app.use("/api", Product);
app.use("/api", User);
app.use("/api", Category);

//nodemailer

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages:${success} ===`);
});

//server connection
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
