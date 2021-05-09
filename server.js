//environment variables
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const morgan = require("morgan");
const boxen = require("boxen");
//routes
const Auth = require("./routes/auth");
const User = require("./routes/user");
const Product = require("./routes/product");
const Category = require("./routes/category");
//database connection
const mongoose = require("mongoose");
const { red } = require("color-name");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(
      boxen("MONGODB connected!!!", {
        padding: 1,
        borderColor: "magenta",
        margin: 1,
        borderStyle: "round",
      })
    );
  })
  .catch((err) => {
    console.log(err.message);
  });

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//route middlewares
app.use("/api", Auth);
app.use("/api", Product);
app.use("/api", User);
app.use("/api", Category);
//server connection
const PORT = process.env.PORT;
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
app.listen(PORT, () => {
  console.log(
    boxen(`listening on port ${PORT}`, {
      padding: 1,
      borderColor: "red",
      margin: 1,
      borderStyle: "round",
    })
  );
});
