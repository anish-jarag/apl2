const os = require("os");

console.log("OS Type:", os.type());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("CPU info:", os.cpus());
console.log("Home Directory:", os.homedir());
console.log(os.networkInterfaces());
