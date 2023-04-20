const utils = require("./utils.js")
const fs = require("fs")
const path = require("path")

const Filename = process.argv[2];
const inputFilepath = path.join("input",Filename)
const outputFilepath = path.join("output",Filename)
//console.log(outputFilepath);

if(fs.existsSync(inputFilepath))
{
    const data = fs.readFileSync("input/cart.json","utf-8");
    const jsonData = JSON.parse(data);
    const result = utils.calculatedTotalPrice(jsonData);

    console.log("writing to:",outputFilepath);
    fs.writeFileSync(outputFilepath,JSON.stringify(result));

}

else{
    console.log("file does not exist");
}