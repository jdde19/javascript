const { createReadStream } = require("fs");

const stream = createReadStream("./test/big.txt");

stream.on("data", (data) => {
    console.log(data);
});