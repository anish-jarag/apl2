const fs = require("fs");
const writable = fs.createWriteStream("Example.txt");

writable.write("Hello World, its Anish!");
writable.end();
console.log("Data writen to file");
