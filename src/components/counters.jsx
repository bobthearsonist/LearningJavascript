import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  counters = [
    { id: 0, value: 0 },
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];
  state = {
    counters: this.counters,
  };

  handleDelete = (counterId) => {
    console.log("Delete received");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            handleDelete={(counterId) => this.handleDelete(counterId)}
          >
            <h3>Counter # {counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
