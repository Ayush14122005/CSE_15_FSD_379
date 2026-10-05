// // Write a node.js program to create a basic HTTP server that handles different URL routes.
// The server should:
// Display "Home Page" when the user visits /.
// Display "About Page" when the user visits / About .
// Return a 404 status code and display "page not found" for any invalid URL.
// Provide a link to return to the Home Page on the 404 page.
// Run the server on port 3000. 

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Home Page</h1>");
        res.end();

    }
    else if(req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>About Page</h1>");
        res.end();

    }

    else{res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>Page not found</h1>");
        res.end();

    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
