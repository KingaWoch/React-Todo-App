import React from "react";
import Task from "./Task.js";

const TaskList = () => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        <Task />
      </ul>
    </div>
  );
};

export default TaskList;
