const { Schema } = require("mongoose");

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },
});

module.exports = { TaskSchema };
