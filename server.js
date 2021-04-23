//environment variables
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
//routes
const Auth = require("./routes/auth");
const Product = require("./routes/product");
const Category = require("./routes/category");
//database connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MONGODB connected!!!");
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
app.use("/api", Category);
//server connection
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
