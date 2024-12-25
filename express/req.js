const express = require("express");
const app = express();

app.get("/request-demo", (req, res) => {
  console.log("Request URL:", req.url); // Logs the requested URL
  console.log("Request Method:", req.method); // Logs the HTTP method
  console.log("Request Headers:", req.headers); // Logs the headers
  console.log("Query Parameters:", req.query); // Logs query parameters
  console.log("Client IP Address:", req.ip); // Logs the client's IP address

  res.send("Check the console for request object details!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/request-demo");
});
