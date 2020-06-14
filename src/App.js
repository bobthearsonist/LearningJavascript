import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    counters: [],
  };

  idForNextCounter = 0;

  getNextCounterId = () => {
    return this.idForNextCounter++;
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

  handleDelete = (counterId) => {
    console.log("Delete received " + counterId);
    this.setState({
      counters: this.state.counters.filter(
        (counter) => counter.id !== counterId
      ),
    });
  };

  handleIncrement = (counterId) => {
    console.log("handle increment " + counterId);
    const newCounter = this.state.counters.filter(
      (counter) => counter.id === counterId
    )[0];
    newCounter.value += 1;
    const counters = this.state.counters
      .filter((counter) => counter.id !== counterId)
      .concat(newCounter)
      .sort((a, b) => a.id - b.id);

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters}
          onNew={() => this.handleNew()}
          onReset={() => this.handleReset()}
        />
        <main role="main" class="container">
          <Counters
            counters={this.state.counters}
            onIncrement={(counterId) => this.handleIncrement(counterId)}
            onDelete={(counterId) => this.handleDelete(counterId)}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
