const {writeFileSync} = require("fs");

for (let i = 0; i < 10000; i++)
{
    writeFileSync("./test/big.txt", `hello, world ${i}`, {flag : "a"});
}