// Optional local server for testing the form's POST request in DevTools > Network.
// Requires Node.js. It stores no submitted data.
const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const root = __dirname;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const submittedPairs = querystring.parse(body);
      console.log("Submitted name=value pairs:", submittedPairs);
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ received: true }));
    });
    return;
  }

  const requested = req.url === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]);
  const filePath = path.join(root, requested);
  if (!filePath.startsWith(root)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) { res.writeHead(404); res.end("Not found"); return; }
    res.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(5500, () => console.log("Course mini-site running at http://localhost:5500"));
