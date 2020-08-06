// Get the Http module
const http = require("http");

//Define Variables
const hostname = "127.0.0.1";
const port = 3200;

//Defines Routes
const routes = {
  root: "/",
  users: "/users",
  createUser: "/create-user",
};

// create a server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === routes.root) {
    res.write('<html lang="en">');
    res.write("<head><title>Root page</title></head>");
    res.write(
      `<body><form action=${routes.createUser} method='POST'><input type='text' name='username'><button type='submit'>Create User</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === routes.users) {
    res.write('<html lang="en">');
    res.write("<head><title>Users page</title></head>");
    res.write(
      `<ul><li>Marc</li><li>Julien</li><li>Catherine</li><li>Sandy</li><li>Olivia</li></ul>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === routes.createUser && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); //username = nameEntered
      const message = parsedBody.split("=")[1];
      console.log("User created -> " + message);
    });
  }

  // Render this response once the request have done
  res.write('<html lang="en">');
  res.write("<head><title>First page</title></head>");
  res.write("<body><h1>Hello from node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

// Listen to the server
server.listen(port, hostname, () => {
  console.log("Server Listen to 127.0.0.1 at port 3200");
});
