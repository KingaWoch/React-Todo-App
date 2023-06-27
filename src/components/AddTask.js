import React, { Component } from "react";

class AddTask extends Component {
  state = {};
  render() {
    return (
      <div className="input-field">
        <input type="text" placeholder="Create a new task..." />
        <button className="add-btn">ADD</button>
      </div>
    );
  }
}

export default AddTask;
