import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [],
  };

  idForNextCounter = 0;

  getNextCounterId = () => {
    return this.idForNextCounter++;
  };

  handleDelete = (counterId) => {
    console.log("Delete received " + counterId);
    this.setState({
      counters: this.state.counters.filter(
        (counter) => counter.id !== counterId
      ),
    });
  };

  handleNew = () => {
    this.setState({
      counters: [
        ...this.state.counters,
        {
          id: this.getNextCounterId(),
          value: 0,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <button className="btn-primary m-2" onClick={() => this.handleNew()}>
          Add New Counter
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
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
