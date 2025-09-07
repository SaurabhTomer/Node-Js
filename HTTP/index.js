const http = require('http');

const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:  ${req.url} New rwq recieved \n`;

    fs.appendFile('log.txt', log, (err, data) => {
        
        switch (req.url) {
            case "/" :
            res.end("homepage");
                break;
            case "/about": 
            res.end("hello i am saurabh tomer");
                break;
            default:
                res.end("404 not found");
        }
    });

    console.log(req);

    // console.log("new req rec.");
    // res.end('hello from server');
});

myServer.listen(8000, () => {
    console.log('Server Started');
});

