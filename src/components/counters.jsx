import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  counters = [new Counter(), new Counter(), new Counter()];
  state = {
    counters: this.counters,
  };
  render() {
    return (
      <table>
        <tr className="body">
          {this.state.counters.map((counter, index) => (
            <tr>
              <Counter hasMargin></Counter>
            </tr>
          ))}
        </tr>
      </table>
    );
  }
}

export default Counters;
