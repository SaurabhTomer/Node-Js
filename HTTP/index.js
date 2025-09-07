const http = require('http'); // Core module to create HTTP server
const fs = require('fs');     // File system module for logging
const url = require('url');   // URL module to parse query strings

// Create HTTP server
const myServer = http.createServer((req, res) => {
    // Ignore browser's favicon request (every browser automatically requests /favicon.ico)
    if (req.url === "/favicon.ico") return res.end();

    // Log each request with timestamp and URL int log.txt
    const log = `${Date.now()}:  ${req.url} New request received \n`;

    // Parse the URL to extract pathname and query params
    const myUrl = url.parse(req.url, true);
    console.log(myUrl); // Debugging: shows parsed URL object in console

    // Append request details into log.txt file
    fs.appendFile('log.txt', log, (err, data) => {
        
        // Routing based on pathname
        switch (myUrl.pathname) {
            case "/":
                res.end("homepage"); // Homepage route
                break;

            case "/about":
                const username = myUrl.query.myname; // Extract query param: ?myname=...
                res.end(`hello ${username}`);        // Respond with personalized message
                break;

            case "/search":
                const search = myUrl.query.search_query; // Extract query param: ?search_query=...
                res.end("here are your results " + search); 
                break;

            default:
                res.end("404 not found"); // For any other path
        }
    });
});

// Start server on port 8000
myServer.listen(8000, () => {
    console.log('Server Started');
});
