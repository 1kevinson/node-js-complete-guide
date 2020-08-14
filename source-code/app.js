const express = require("express");

const app = express();

//Request goes from the top to bottom

app.use("/", (req, res, next) => {
  console.log("always works");
  next();
});

app.use("/add", (req, res, next) => {
  console.log("in middleware");
  res.send("<h1>The 'Add page'</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3100);
