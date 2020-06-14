import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: "tag1",
  };

  handleIncrement = () => {
    console.log("Increment clicked");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { tag } = this.state;
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(tag)}
          className="btn btn-secondary btn-nm"
        >
          Increment
        </button>{" "}
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

  formatCount = () => {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
