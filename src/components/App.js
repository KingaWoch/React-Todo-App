import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class TodoApp extends Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        content: "wash the dishes",
        finishDate: null,
        done: false,
      },
      {
        id: 1,
        content: "do the laundry",
        finishDate: null,
        done: false,
      },
      {
        id: 2,
        content: "go for a walk",
        finishDate: null,
        done: false,
      },
      {
        id: 3,
        content: "go to the gym",
        finishDate: null,
        done: true,
      },
      {
        id: 4,
        content: "buy bread",
        finishDate: null,
        done: false,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  markAsDone = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = true;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };

  addTask = (content) => {
    const task = {
      id: this.counter,
      content,
      finishDate: null,
      done: false,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task], // nowa tablica ze starych elementów plus nowy task na końcu
    }));
    return true;
  };

  render() {
    return (
      <main className="app">
        <header>
          <h1>TODO APP</h1>
        </header>
        <section>
          <AddTask add={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            done={this.markAsDone}
          />
        </section>
      </main>
    );
  }
}

export default TodoApp;
