const fs = require("fs");
const writeFileSync = fs.writeFileSync;
const readFileSync = fs.readFileSync;

const paths = [require("./path").first, require("./path").second];
console.log(paths[0]);

const first = readFileSync(paths[0], "utf8");
const second = readFileSync(paths[1], "utf8");

writeFileSync("./test/third.txt", `${first}, ${second}`, {flag:"a"});