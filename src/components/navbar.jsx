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
    <nav className="navbar navbar-light bg-light">
      <div className="div container">
        <div className="col">
          <span className="m-2">Total</span>
          <span className="badge badge-pill badge-secondary">
            {counters
              .map((counter) => counter.value)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )}
          </span>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <button
              className="btn btn-primary m-2 btn-block"
              onClick={() => handleNew(onNew)}
            >
              Add New Counter
            </button>
          </div>
          <div className="row">
            {" "}
            <button
              className="btn m-2 btn-danger btn-block"
              onClick={() => handleReset(onReset)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
