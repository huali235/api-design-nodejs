import express from "express";
import router from "./router";

const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "Hello from express" });
});

export default app;
