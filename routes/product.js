const express = require("express");
const router = express.Router();
const { requireSignin } = require("../controller/auth");
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
router.post("/product", requireSignin, createProduct);
router.get("/product/:productId", read);
router.delete(
  "/product/remove/:productId",
  requireSignin,

  removeProduct
);
router.get("/product/categories/:productId", listCategories);
router.put("/product/update/:productId", requireSignin, update);
router.get("/product/related/:productId", listRelated);
router.get("/products", getAllProducts);
router.get("/product/photo/:productId", photo);
router.param("productId", productById);
module.exports = router;
