require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { TaskModel } = require("./Models/TaskModel");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const DB_URL = process.env.MONGODB_URL;

app.get("/", (req, res) => {
  const allTasks = TaskModel.find({});
  res.json({ allTasks });
});

app.post("/addTask", (req, res) => {
  const newTask = TaskModel(req.body);
  newTask.save();
  res.json({ message: "Task added" });
});

app.listen(3001, () => {
  console.log("App started!");
  mongoose.connect(DB_URL);
  console.log("DB connected!");
});
