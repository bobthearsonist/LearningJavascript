import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id: 0,
  };

  handleIncrement = () => {
    console.log("Increment clicked");
    this.setState({ value: this.state.value + 1 });
  };

  handleDelete() = () => {
      console.log("Delete clicked")
  }

  render() {
    const { tag } = this.state;

    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(tag)}
          className="btn btn-secondary btn-nm"
        >
          Increment
        </button>{" "}
        <button onClick={()=>this.handleDelete()}></button>
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
