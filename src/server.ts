import express from "express";

const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "Hello from express" });
});

export default app;
