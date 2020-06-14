import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement() {
    console.log("Increment clicked");
    this.state.count += 1;
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement.bind(this)}
          className="btn btn-secondary btn-nm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = ["badge", "m-2"];
    return (this.state.count === 0
      ? [...classes, "badge-warning"]
      : [...classes, "badge-primary"]
    ).join(" ");
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
