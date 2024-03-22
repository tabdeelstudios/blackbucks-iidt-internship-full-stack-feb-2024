import React, { useEffect, useState } from "react";
import axios from "axios";

function ToDo() {
  const [usertask, setUserTask] = useState("");

  const addTask = () => {
    axios
      .post("http://localhost:3001/addTask", { title: usertask, status: false })
      .then((res) => console.log(res.data));
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/").then((res) => console.log(res.data));
  // }, []);

  return (
    <div>
      <input
        placeholder="Task Name"
        type="text"
        onChange={(e) => setUserTask(e.target.value)}
        value={usertask}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default ToDo;
