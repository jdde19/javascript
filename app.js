
const http = require("http");
const fs = require("fs");
const readFile = fs.readFile;

const paths = [require("./path").first, require("./path").second];

const sum = function()
{
    let sum = 0;
    for (let i = 0; i < 10000; i++)
    {
        for (let j =0; j < 10000; j++)
        {
            sum += j;
        }
    }
    return sum;
    
}

const summer = () =>
{
    return new Promise((resolve, reject) => 
    {
        resolve(sum());
    })
}

const end = async function()
{
    const first = await summer();
    console.log(first);
}

// Nauna yung createServer

const callback = function(req, res)
{
    if (req.url === "/hello")
    {
        readFile(paths[0], "utf-8", (err, data) => {
            res.end(data);
        });
    }

    else
    {
        // let sum = 0;
        // for (let i = 0; i < 10000; i++)
        // {
        //     for (let j =0; j < 10000; j++)
        //     {
        //         sum += j;
        //     }
        // }
        // console.log(sum);
        end();
        console.log("hello");
        res.end("boom");
    }

}

const server = http.createServer(callback)
server.listen(3000, () => console.log("listening...")); 

// Nauna yung readFile

/* const callback = function(err, data)
{
    const server = http.createServer((req, res) => {
        res.end(data);
    });

    server.listen(3000, () => console.log("listening..."));
}


readFile(paths[0], "utf-8", callback) */



// const server = http.createServer((req,res) => {
//     res.end();
// })

// server.listen(3000, () => {
//     console.log("hello");
// });







