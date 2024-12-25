const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON body

app.put("/put-demo", (req, res) => {
  console.log("Request Body:", req.body); // Logs the request body
  res.send("This is a PUT request demo.");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
