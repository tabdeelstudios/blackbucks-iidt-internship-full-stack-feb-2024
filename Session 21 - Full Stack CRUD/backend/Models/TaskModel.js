const { model } = require("mongoose");
const { TaskSchema } = require("../Schemas/TaskSchema");

const TaskModel = new model("task", TaskSchema);

module.exports = { TaskModel };
