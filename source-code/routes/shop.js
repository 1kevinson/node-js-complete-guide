const express = require("express");
const path = require("path");
const rootDir = require("../Util/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html")); // __dirname is absolute path of the operating system to the project folder
});

module.exports = router;
