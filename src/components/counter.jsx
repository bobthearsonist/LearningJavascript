import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-nm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
