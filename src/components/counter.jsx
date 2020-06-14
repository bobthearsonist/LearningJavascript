import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
  };

  handleIncrement = () => {
    console.log("Increment clicked");
    this.setState({ value: this.state.value + 1 });
  };

  handleDelete = (counterId) => {
    console.log("Delete clicked " + counterId);
    this.props.handleDelete(counterId);
  };

  render() {
    const { id } = this.state;

    console.log("props", this.props);
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
    let classes = ["badge", "m-2"];
    return (this.state.value === 0
      ? [...classes, "badge-warning"]
      : [...classes, "badge-primary"]
    ).join(" ");
  }

  formatCount = () => {
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
