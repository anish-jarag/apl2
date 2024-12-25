const express = require('express');
const app = express();

app.get('/get-demo', (req, res) => {
  res.send('This is a GET request demo.');
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
