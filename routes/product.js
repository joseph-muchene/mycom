const express = require("express");
const router = express.Router();
const { requireSignin, isAdmin } = require("../controller/auth");
const { getUser } = require("../controller/user");
const {
  productById,
  createProduct,
  read,
  removeProduct,
  update,
  listCategories,
  listRelated,
  getAllProducts,
  photo,
} = require("../controller/product");
router.post("/product/:userId", isAdmin, requireSignin, createProduct);
router.get("/product/:productId", read);
router.delete(
  "/product/remove/:userId/:productId",
  requireSignin,
  isAdmin,
  removeProduct
);
router.get("/product/categories/:productId", listCategories);
router.put(
  "/product/update/:userId/:productId",
  requireSignin,
  isAdmin,
  update
);
router.get("/product/related/:productId", listRelated);
router.get("/products", getAllProducts);
router.get("/product/photo/:productId", photo);
router.param("productId", productById);
router.param("userId", getUser);
module.exports = router;
