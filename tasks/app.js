const express = require("express");
const bodyParser = require("body-parser");
const tasks = require("./data");

const app = express();
const port = 5000;

// create applicaion/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to node" });
});

app.get("/tasks", (req, res) => {
  res.status(200).send(tasks);
});

app.get("/tasks/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  task = tasks.find((task) => task.id === taskId);

  if (!task) {
    res.status(404).send({ detail: `Task with id ${task} is not found` });
  }

  res.status(200).send(task);
});

app.listen(port, () => {
  console.log(`Application running on port ${port} ...`);
});
