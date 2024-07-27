function hello(name)
{
    console.log(`Hello, world`);
}

// const f = require("./logger");
// console.log(f);
// f.log(`hello, ${f.name}`);

const os = require("os");

console.log(require("os").userInfo());
console.log(os.uptime());
console.log(os.freemem());
