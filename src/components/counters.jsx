import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  handleDelete = (counterId) => {
    console.log("passing delete received " + counterId);
    this.props.onDelete(counterId);
  };
  handleIncrement = (counterId) => {
    console.log("passing increment received " + counterId);
    this.props.onIncrement(counterId);
  };
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={(counterId) => this.handleDelete(counterId)}
            onIncrement={(counterId) => this.handleIncrement(counterId)}
          >
            <h3>Counter # {counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
