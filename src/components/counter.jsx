import React, { Component } from "react";

class Counter extends Component {
  handleIncrement = (id) => {
    console.log("Increment clicked " + id);
    this.props.onIncrement(id);
  };

  handleDelete = (id) => {
    console.log("Delete clicked " + id);
    this.props.onDelete(id);
  };

  handleReset = () => {
    console.log("reset received");
    const value = 0;
    this.setState({ value });
  };

  render() {
    const { id } = this.props.counter;

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>{" "}
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.handleDelete(id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    let classes = ["badge", "m-2"];
    return (value === 0
      ? [...classes, "badge-warning"]
      : [...classes, "badge-primary"]
    ).join(" ");
  }

  formatCount = () => {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
