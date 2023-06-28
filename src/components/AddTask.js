import React, { Component } from "react";

class AddTask extends Component {
  state = {
    content: "",
    done: false,
  };

  handleInputChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleClick = () => {
    const content = this.state.content;
    const add = this.props.add(content);
    if (add) {
      this.setState({
        content: "",
        done: false,
      });
    }
  };
  render() {
    return (
      <div className="input-field">
        <input
          value={this.state.content}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Create a new task..."
        />
        <button onClick={this.handleClick} className="add-btn">
          ADD
        </button>
      </div>
    );
  }
}

export default AddTask;
