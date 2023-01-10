const express = require("express");
const tasks = require("./data");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to node" });
});

app.get("/tasks", (req, res) => {
  res.status(200).send(tasks);
});

app.listen(port, () => {
  console.log(`Application running on port ${port} ...`);
});
