import React from "react";
const Task = () => {
  return (
    <li>
      <p>Zadanie 1</p>
      <div className="buttons">
        <button className="done-btn">Done</button>
        <button className="delete-btn">X</button>
      </div>
    </li>
  );
};

export default Task;
