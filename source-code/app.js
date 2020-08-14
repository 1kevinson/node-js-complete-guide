const express = require("express");

const app = express();

// Enter in a middleware
app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3100);
