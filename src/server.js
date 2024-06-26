const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

app.use(express.static("static"));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "Hello from express" });
});

module.exports = app;
