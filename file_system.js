const fs = require("fs");

//Write file
fs.writeFileSync("file.txt", "Hello, This is file system");

//Read file
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);

//Rename file
fs.renameSync("file.txt", "newFile.txt");

//Delete a file
fs.unlinkSync("newFile.txt");
console.log("File deleted");

//File exists?
console.log("File exists:", fs.existsSync("newFile.txt"));
