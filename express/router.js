const express = require("express");
const app = express();
const router = express.Router();

// Define routes in the router
router.get("/user", (req, res) => {
  res.send("User GET request");
});

router.post("/user", (req, res) => {
  res.send("User POST request");
});

// Use the router in the app
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
