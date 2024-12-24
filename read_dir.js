const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) {
    console.log("Error Reading directory");
    return;
  }
  console.log(files);
});
