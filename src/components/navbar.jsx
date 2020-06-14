import React from "react";

const handleNew = (onNew) => {
  console.log("new clicked");
  onNew();
};

const handleReset = (onReset) => {
  console.log("reset clicked");
  onReset();
};

const NavBar = ({ counters, onNew, onReset }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <span className="m-2">Total</span>
      <span className="badge badge-pill badge-secondary">
        {counters
          .map((counter) => counter.value)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
      </span>
      <button className="btn-primary m-2" onClick={() => handleNew(onNew)}>
        Add New Counter
      </button>
      <button
        className="m-2 button-danger"
        onClick={() => handleReset(onReset)}
      >
        Reset
      </button>{" "}
    </nav>
  );
};

export default NavBar;
