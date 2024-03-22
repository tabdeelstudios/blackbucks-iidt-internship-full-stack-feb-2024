const express = require("express");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// Creating Order Schema
const OrderSchema = new Schema({
  totalPrice: { type: Number, required: true },
  username: { type: String },
  orderDate: { type: Date },
});

// Creating Order Model
const OrderModel = new model(OrderSchema);

// Inserting data into MongoDB
const newOrder = {
  totalPrice: 500.0,
  username: "John",
  orderDate: new Date(),
};

const db_url =
  "mongodb+srv://aquibIIDT:aquibIIDT100@mongodb-demo-cluster.4falpdn.mongodb.net/mongodbDemo?retryWrites=true&w=majority&appName=MongoDB-Demo-Cluster";

const PORT = 3002;

const app = express();

app.post("/addOrder", (req, res) => {
  OrderModel.save(newOrder);
  res.json({ message: "Order saved!" });
});

app.listen(PORT, () => {
  console.log("Server started!");
  mongoose.connect(db_url);
  console.log("DB connected!");
});
