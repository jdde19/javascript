const fs = require("fs");
const util = require("util");
const readFile = fs.readFile;

const getText = (path) => {
    return new Promise((resolve, reject) =>
    {
        readFile(path, "utf-8", (err, data) =>
        {
            if (err)
            {
                reject(err); // nagpapasa sa .catch
            }

            else
            {
                resolve(data); // nagpapasa sa .then
            }
        })
    })
};


// getText("./test/first.txt")
// .then((result) => console.log(result))
// .then(() => {getText("./test/third.txt").then(result => console.log(result))}); // kung ano ni return ng callback, ni rereturn din ng then

const sum = function()
{
    let sum = 0;
    for (let i = 0; i < 1000; i++)
    {
        for (let j =0; j < 1000; j++)
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

end();
console.log("hello");

// const start = async function() {
//     const first = await getText("./test/first.txt"); // await waits for the promise to become resolved
//     console.log(first);
// }

// start();


// console.log(getText("./test/first.txt"));
// .then((result) => console.log(result))
// .then(() => getText("./test/third.txt"))
// .then(result => console.log(result));

// const res = new Promise((resolve, reject) =>
// {
//     readFile("./test/first.txt", "utf-8", (err, data) =>
//     {
//         resolve(data);
//     });
// })

// console.log(res);



