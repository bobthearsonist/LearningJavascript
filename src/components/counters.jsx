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
    console.log("handle new");
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

  handleReset = () => {
    console.log("handle reset");
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counterId) => {
    console.log("handle increment " + counterId);
    const newCounter = this.state.counters.filter(
      (counter) => counter.id === counterId
    )[0];
    newCounter.value += 1;
    const counters = this.state.counters
      .filter((counter) => counter.id !== counterId)
      .concat(newCounter);

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button className="btn-primary m-2" onClick={() => this.handleNew()}>
          Add New Counter
        </button>
        <button
          className="m-2 button-danger"
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
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
