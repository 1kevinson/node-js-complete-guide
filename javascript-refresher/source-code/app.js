const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write('<html lang="en">');
  res.write("<head><title>First page</title></head>");
  res.write("<body><h1>Hello from node.js server!</h1></body>");
  res.write("</html>");
});

server.listen(3100);
