const http = require("http");

const server = http.createServer((req, res) => {

    console.log("Request URL:", req.url);
    console.log("Request Method:", req.method);

    // Status code and headers
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "X-Student": "Ayush"
    });

    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server started");
    console.log("Open http://localhost:3000");
});