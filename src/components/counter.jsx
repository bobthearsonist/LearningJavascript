import React, { Component } from "react";

const handleIncrement = (onIncrement, id) => {
  console.log("Increment clicked " + id);
  onIncrement(id);
};

const handleDelete = (onDelete, id) => {
  console.log("Delete clicked " + id);
  onDelete(id);
};

const Counter = ({ counter, children, onDelete, onIncrement }) => {
  return (
    <div>
      {children}
      <span className={getBadgeClasses(counter)}>{formatCount(counter)}</span>
      <button
        onClick={() => handleIncrement(onIncrement, counter.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>{" "}
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => handleDelete(onDelete, counter.id)}
      >
        Delete
      </button>
    </div>
  );
};

const getBadgeClasses = (counter) => {
  let classes = ["badge", "m-2"];
  return (counter.value === 0
    ? [...classes, "badge-warning"]
    : [...classes, "badge-primary"]
  ).join(" ");
};

const formatCount = (counter) => {
  return counter.value === 0 ? "Zero" : counter.value;
};

export default Counter;
