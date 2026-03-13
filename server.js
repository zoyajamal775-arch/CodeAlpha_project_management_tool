// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/tasks", (req, res) => {
  res.json({
    todo: ["Create login page", "Setup backend API"],
    inProgress: ["Build dashboard UI"],
    done: ["Project setup complete"]
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));