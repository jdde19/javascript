const fs = require("fs");
const readFile = fs.readFile;
const writeFile = fs.writeFile;

const paths = [require("./path").first, require("./path").second];
let first;



const callback = function(err, data)
{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log("hi");
    first = data;
    let second = readFile(paths[1], "utf-8", (err, data) => 
        {
            if(err)
            {
                console.log(err)
                return;
            }

            
            writeFile("./test/fourth.txt", data, (err) =>
                {
                    if (err)
                    {
                        console.log(err);
                        return;
                    }
                    console.log("japro");
                }
            )
        }
    );
    console.log("hello");
}

readFile(paths[0], "utf-8", callback);
