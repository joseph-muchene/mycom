//environment variables
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
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
