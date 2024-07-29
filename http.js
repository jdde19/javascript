const http = require("http");

const createServer = http.createServer;


const callback = function(req, res)
{
    if (req.url === "/home")
    {
        res.write("welcome to home");
        res.end();
    }
    
    else if(req.url === "/about")
    {
        res.write("welcome to about");
        res.end();
    }

    else
    {
        res.end("hello");
    }
}

const server = createServer(callback)
server.listen(3000);
