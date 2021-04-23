const express = require("express");
const router = express.Router();
const {
  categoryById,
  create,
  read,
  update,
  remove,
  list,
} = require("../controller/category");
router.post("/create/category", create);
router.get("/category/read/:categoryId", read);
router.put("/category/update/:categoryId", update);
router.delete("/category/remove/:categoryId", remove);
router.get("/category/list", list);
router.param("categoryId", categoryById);

module.exports = router;
