const express = require("express");
const path = require("path");
const rootDir = require("../Util/path");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log(rootDir);
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.table(req.body);
  res.redirect("/");
});

module.exports = router;
