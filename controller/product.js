const Product = require("../models/product.model");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    // check for all fields
    const { name, description, price, category } = fields;

    if (!name || !description || !price || !category) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    let product = new Product(fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        console.log("PRODUCT CREATE ERROR ", err);
        return res.status(400).json({
          msg: "Operation failed",
        });
      }
      result.photo = undefined;
      res.json(result);
    });
  });
};

///get a single product
exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};
//remove a product
exports.removeProduct = (req, res) => {
  const product = req.product;
  product.remove((err, deletedProduct) => {
    if (err || !deletedProduct) {
      return res.status(400).json({
        msg: "Operation failed",
      });
    }
    req.deletedProduct.photo = undefined;
    return res.json(deletedProduct);
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    // check for all fields
    const { name, description, price, category, quantity } = fields;

    if (!name || !description || !price || !category || !quantity) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    let product = req.product;
    product = _.extend(product, fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        console.log("PRODUCT CREATE ERROR ", err);
        return res.status(400).json({
          msg: "Operation failed",
        });
      }
      res.json(result);
    });
  });
};

exports.listCategories = (req, res) => {
  Product.distinct("category", {}, (err, categories) => {
    if (err || !categories) {
      return res.status(400).json({
        msg: "Products not found",
      });
    }
    res.json(categories);
  });
};

exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  Product.find({ _id: { $ne: req.product }, category: req.product.category })
    .limit(limit)
    .populate("category", "_id name")
    .select("-photo")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          msg: "Products not found",
        });
      }

      res.json(product);
    });
};
exports.getAllProducts = async (req, res) => {
  const PAGE_SIZE = 6;
  const page = parseInt(req.query.page || "0");
  const total = await Product.countDocuments({});
  const product = await Product.find({})
    .select("-photo")

    .limit(PAGE_SIZE)
    .sort("-created")
    .skip(PAGE_SIZE * page);
  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    product,
  });
};

exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};
