const express = require("express");
const { isAdmin, requireSignin } = require("../controller/auth");
const router = express.Router();

const {
  categoryById,
  create,
  read,
  update,
  remove,
  list,
} = require("../controller/category");
const { getUser } = require("../controller/user");
router.post("/create/category/:userId", requireSignin, isAdmin, create);
router.get("/category/read/:categoryId", read);
router.put(
  "/category/update/:userId/:categoryId",
  requireSignin,
  isAdmin,
  update
);
router.delete(
  "/category/remove/:userId/:categoryId",
  requireSignin,
  isAdmin,
  remove
);
router.get("/category/list", list);
router.param("categoryId", categoryById);
router.param("userId", getUser);
module.exports = router;
