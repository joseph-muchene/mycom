const Category = require("../models/category.model");

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        msg: "Category does not exist",
      });
    }
    req.category = category;
    next();
  });
};

exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        msg: "operation error",
      });
    }
    res.json({ data });
  });
};
exports.read = (req, res) => {
  return res.json(req.category);
};

exports.update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        msg: "operation error",
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        msg: "operation error",
      });
    }
    res.json({ message: "category deleted" });
  });
};

exports.list = (req, res) => {
  category.find().exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        msg: "Not found",
      });
    }
    res.json(data);
  });
};