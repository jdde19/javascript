const util = require("util");
const fs = require("fs");

const read = util.promisify(fs.readFile);
// Promise.all([read("./test/first.txt", "utf-8"), read("./test/second.txt", "utf-8"), read("./test/third.txt", "utf-8")])
// .then(result => {console.log(result[0], result[1], result[2])});
read("./test/first.txt", "utf-8").then(result => console.log(result));



// const ran = (array) =>
// {
//     array.forEach( (i) => 
//     {
//         setTimeout(() => console.log(i), 0);
//     }
//     );
// }
// ran([1,2,3]);
// console.log("hello");