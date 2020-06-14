import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: [0, 0, 0],
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (product) => {
    console.log("Increment clicked");
    let updatedCount = this.state.count;
    updatedCount[this.state.tags.indexOf(product)]++;
    this.setState({ count: updatedCount });
  };

  render() {
    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li>
            <React.Fragment>
              <span className={this.getBadgeClasses()}>
                {this.formatCount(tag)}
              </span>
              <button
                onClick={() => this.handleIncrement(tag)}
                className="btn btn-secondary btn-nm"
              >
                Increment
              </button>{" "}
            </React.Fragment>
          </li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = ["badge", "m-2"];
    return (this.state.count === 0
      ? [...classes, "badge-warning"]
      : [...classes, "badge-primary"]
    ).join(" ");
  }

  formatCount = (product) => {
    const { count, tags } = this.state;

    return count[tags.indexOf(product)] === 0
      ? "Zero"
      : count[tags.indexOf(product)];
  };
}

export default Counter;
