const fs = require("fs");

fs.readFile("Example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error");
    return;
  }
  console.log(data);
});
