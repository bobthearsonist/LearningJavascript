import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  counters = [new Counter(), new Counter(), new Counter()];
  state = {
    counters: this.counters,
  };
  render() {
    return (
      <ul>
        {this.state.counters.map((counter, index) => (
          <li>
            <Counter></Counter>
          </li>
        ))}
      </ul>
    );
  }
}

export default Counters;
