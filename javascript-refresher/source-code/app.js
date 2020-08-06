const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write('<html lang="en">');
    res.write("<head><title>First page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // req.on -> is a Event Listener
    req.on("data", (chunk) => {
      console.log(chunk); // <Buffer 6d 65 73 73 61 67 65 3d 48 65 6c 6c 6f 2b 6b 69 6e 67 2b 6b 65 76 69 6e>
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // message=textEntered
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end;
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write('<html lang="en">');
  res.write("<head><title>First page</title></head>");
  res.write("<body><h1>Hello from node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3100);
