const fs = require("fs");

// fs.readFile("Example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error");
//     return;
//   }
//   console.log(data);
// });

// const data = fs.readFileSync("Example.txt", "utf8");
// console.log(data);

try {
  const data = fs.readFileSync("Example.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log("Error:", err);
  // console.log(err);
}
