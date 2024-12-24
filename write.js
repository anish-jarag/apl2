const fs = require("fs");

fs.writeFile("Example2.txt", "Hello Anish using file write!", (err) => {
  if (err) {
    console.log("Error writing", err);
    return;
  }
  console.log("File written succesfully");
});
