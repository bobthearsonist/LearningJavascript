import React, { Component } from "react";

const handleNew = (props) => {
  console.log("new clicked");
  props.onNew();
};

const handleReset = (props) => {
  console.log("reset clicked");
  props.onReset();
};

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <span className="m-2">Total</span>
        <span className="badge badge-pill badge-secondary">
          {props.counters
            .map((counter) => counter.value)
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )}
        </span>
        <button className="btn-primary m-2" onClick={() => handleNew(props)}>
          Add New Counter
        </button>
        <button
          className="m-2 button-danger"
          onClick={() => handleReset(props)}
        >
          Reset
        </button>{" "}
      </a>
    </nav>
  );
};

export default NavBar;
