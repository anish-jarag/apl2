// const fs = require("fs");
// const readable = fs.createReadStream("Example.txt");

// readable.on("data", (chunks) => {
//   console.log("Data: ", chunks.toString());
// });

const fs = require("fs");
const readable = fs.createReadStream("Example.txt");

// Listen for the 'data' event
readable.on("data", (chunk) => {
  console.log("Data: ", chunk.toString());
});

// Listen for the 'end' event
readable.on("end", () => {
  console.log("Finished reading the file.");
});

// Listen for the 'error' event
readable.on("error", (err) => {
  console.error("Error reading file: ", err.message);
});
