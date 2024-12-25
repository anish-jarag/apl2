const path = require("path");

console.log("Base Name:", path.basename("/test/hello.txt"));
console.log("Directory Name:", path.dirname("/test/hello.txt"));
console.log("Extension:", path.extname("/test/hello.txt"));
console.log("Join Paths:", path.join("/test", "subdir", "file.txt"));
console.log("Absolute Path:", path.resolve("file.txt"));
