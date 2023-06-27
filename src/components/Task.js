import React from "react";
const Task = (props) => {
  const { content, done } = props;
  if (done) {
    return (
      <li>
        <p>{content}</p>
        <div className="buttons">
          <button
            onClick={() => props.done(props.task.id)}
            className="done-btn"
          >
            Done
          </button>
          <button
            onClick={() => props.delete(props.task.id)}
            className="delete-btn"
          >
            X
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <p>{content}</p>
        <div className="buttons">
          <button
            onClick={() => props.delete(props.task.id)}
            className="delete-btn"
          >
            X
          </button>
        </div>
      </li>
    );
  }
};

export default Task;
