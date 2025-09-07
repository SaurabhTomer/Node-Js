const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}:  ${req.url} New rwq recieved \n`;
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);
    

    fs.appendFile('log.txt', log, (err, data) => {
        
        switch (myUrl.pathname) {
            case "/" :
            res.end("homepage");
                break;
            case "/about": 
                const username = myUrl.query.myname
            res.end(`hello ${username}`);
                break;
            default:
                res.end("404 not found");
        }
    });

    // console.log(req);

    // console.log("new req rec.");
    // res.end('hello from server');
});

myServer.listen(8000, () => {
    console.log('Server Started');
});

