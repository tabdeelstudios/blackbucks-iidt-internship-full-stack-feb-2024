const express = require("express");

const app = express();

// API Endpoint
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// API Endpoint
app.get("/data", (req, res) => {
  res.json({ username: "john123" });
});

app.listen(3001, () => {
  console.log("Server started!");
});

//npx create-react-app my-app


/*

1. Create a new folder for Backend and open it in VS Code
2. Open the terminal and run "npm init -y" command to create package.json
3. Create a new file called "index.js"
4. Open the terminal and install packages -> npm install express
5. Open the terminal and install dev packages -> npm install -D nodemon
6. Add "start" script to package.json
            "scripts": {
                "start": "nodemon index.js"
            },
7. Require "express" package in index.js file with
            const express = require("express");
8. Create a new instance of the express server
            const app = express();
9. Write the code to start the server
            app.listen(3001, () => {
                console.log("Server started!");
            });
10. Open the terminal and run "npm start" to run the server

*/
