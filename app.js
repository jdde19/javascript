
const http = require("http");

const listen = http.listen;
const server = http.createServer((req,res) => {
    res.end();
})

server.listen(3000, () => {
    console.log("hello");
});







