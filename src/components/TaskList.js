import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => !task.done);
  const done = props.tasks.filter((task) => task.done);
  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      content={task.content}
      done={props.done}
      delete={props.delete}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      content={task.content}
      delete={props.delete}
    />
  ));

  return (
    <div className="task-list">
      <div className="tasks">
        <h2>
          Tasks
          <em>{activeTasks.length > 0 ? ` (${activeTasks.length})` : ""}</em>
        </h2>
        <ul>
          {activeTasks.length > 0 ? (
            activeTasks
          ) : (
            <em style={{ fontWeight: "400" }}>All done</em>
          )}
        </ul>
      </div>
      <div className="comleted-tasks">
        <h2>Completed tasks</h2>
        <ul>{doneTasks}</ul>
      </div>
    </div>
  );
};

export default TaskList;
