const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    quantity: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: ObjectID,
      ref: "category",
      required: true,
    },
    photo: {
      data: Buffer,
      contentTypes: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
