import express from "express";

import connectToDatabase from "./helpers.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there!</h2>");
});

app.get("/ping", (req, res) => {
  res.send("<h2>pong</h2>");
});

app.get("/hello", (req, res) => {
  res.send("<h2>world</h2>");
});

await connectToDatabase();

app.listen(3000);
