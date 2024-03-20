const bodyParser = require("body-parser"); // npm i body-parser
const express = require("express"); //npm i express

const app = express(); // create a new express app
app.use(bodyParser.json()); // initialise body parser

const users = [];

const PORT = 3002; // specify the port number

// used to read data from the server
app.get("/", (req, res) => {
  res.json(users); // return data
});

// used to send data to the server
app.post("/", (req, res) => {
  const username = req.body.username; // reading username from request
  const password = req.body.password; // reading password from request
  users.push({ username: username, password: password });
  console.log(users);
  res.json({ message: "User added!" });
});

// used to update data
app.put("/", (req, res) => {
  const username = req.body.username;
  const newPassword = req.body.newPassword;

  users.map((user) => {
    if (user.username === username) {
      return { ...user, password: newPassword };
    }
    return user;
  });

  res.json({ message: "User updated!" });
});

app.patch("/", (req, res) => {
  const username = req.body.username;
  res.json({ message: "User updated!" });
});

// used to delete data
app.delete("/", (req, res) => {
  const username = req.body.username;
  res.json({ message: "User deleted!" });
});

// run the app
app.listen(PORT, () => {
  console.log("Server running!"); // print to the console
});
