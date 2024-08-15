const http = require("http");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    let path = req.url;
    res.writeHead(400, { "Content-Type": "text/html" });
    if (path === "/") {
      fs.readFile("./index.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else if (path === "/contact") {
      fs.readFile("./contact.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else if (path === "/about") {
      fs.readFile("./about.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile("./404.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    }
  })
  .listen(8080);
