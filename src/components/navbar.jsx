import React, { Component } from "react";

class NavBar extends Component {
  state = {};

  handleNew = () => {
    console.log("new clicked");
    this.props.onNew();
  };

  handleReset = () => {
    console.log("reset clicked");
    this.props.onReset();
  };

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">
            {this.props.counters.length}
          </span>
          <button className="btn-primary m-2" onClick={() => this.handleNew()}>
            Add New Counter
          </button>
          <button
            className="m-2 button-danger"
            onClick={() => this.handleReset()}
          >
            Reset
          </button>{" "}
        </a>
      </nav>
    );
  }
}

export default NavBar;
