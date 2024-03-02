// Create a new element

// let heading = document.createElement("h1");
// heading.innerText = "This is new!";

// let body = document.getElementsByTagName("body");
// body[0].appendChild(heading);

let newTaskInput = document.getElementById("newTaskInput");
let addTaskButton = document.getElementById("addTaskButton");

// let allTasks = [];
// allTasks.push({ taskName: taskName, completion: false });

function addTask() {
  // Read task name from the screen
  let taskName = newTaskInput.value;
  if (taskName.length == 0) {
    document.getElementById("errorMessage").innerText =
      "Please enter task name";
  } else {
    // Create a li for new task
    let newTask = document.createElement("li"); //<li></li>
    // Set task name as li content
    newTask.innerText = taskName; //<li>taskName</li>
    // Display li on the screen
    document.getElementById("taskList").appendChild(newTask); // <ul><li>taskName</li></ul>
    // Attach event to mark complete
    newTask.addEventListener("click", function (e) {
      e.target.style.textDecoration = "line-through";
    });
    // Attach event to delete
    newTask.addEventListener("dblclick", function (e) {
      document.getElementById("taskList").removeChild(e.target);
    });

    document.getElementById("errorMessage").innerText = "";
  }
  // Clear the input field for the next task
  newTaskInput.value = "";
}

async function getUserData() {
  const response = await fetch("https://randomuser.me/api");
  const users = await response.json();
  console.log(users.results[0].name.first);
  let newTask = document.createElement("li"); //<li></li>
  newTask.innerText = users.results[0].name.first; //<li>taskName</li>
  document.getElementById("taskList").appendChild(newTask); // <ul><li>taskName</li></ul>
}
