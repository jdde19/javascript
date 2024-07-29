const eventEmitter = require("events");
const util = require("util");
const customEmitter = new eventEmitter.EventEmitter();


const response = function(response, reply) 
{
    return new Promise ((resolve, reject) =>
    {
        customEmitter.on(response, () => {
            resolve(reply);
        })
    })
}

async function random()
{
    const first = await response("response", "boom!");
    console.log(first);
}

random();
customEmitter.emit("response");

