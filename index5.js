// const http = require('http');

// const server = http.createServer((req, res) => {

//     if (req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('This is GET method');
//     }

//     else if (req.method === 'POST') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('This is POST method');
//     }

// });

// server.listen(8000, () => {
//     console.log('Server is running on port http://localhost:8000');
// });


const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write("Welcome Home");
        res.end();
    }

    else if (req.url == "/about") {
        res.write("About Page");
        res.end();
    }

    else {
        res.write("Page Not Found");
        res.end();
    }

});

server.listen(8000);

console.log("Server started on port 8000");