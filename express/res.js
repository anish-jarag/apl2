const express = require("express");
const app = express();

app.get("/response-demo", (req, res) => {
  res.set("X-Custom-Header", "ExpressDemo"); // Sets a custom header
  res.status(200); // Sets the status code
  res.type("text/html"); // Sets the content type
  res.cookie("user", "Anish"); // Sets a cookie
  res.send("<h1>Response Object Demo</h1>"); // Sends the response
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/response-demo");
});
