import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class TodoApp extends Component {
  state = {
    tasks: [
      {
        id: 0,
        content: "",
      },
    ],
  };
  render() {
    return (
      <main className="app">
        <header>
          <h1>TODO APP</h1>
        </header>
        <section>
          <AddTask />
          <TaskList />
          <div className="comleted-tasks">
            <h3>Completed tasks</h3>
            <ul>
              <li>
                <p>Zadanie 2</p>
                <button className="delete-btn">X</button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default TodoApp;
