import React from "react";

const handleIncrement = (onIncrement, id) => {
  console.log("increment clicked " + id);
  onIncrement(id);
};

const handleDecrement = (onDecrement, id) => {
  console.log("decrement clicked " + id);
  onDecrement(id);
};

const handleDelete = (onDelete, id) => {
  console.log("delete clicked " + id);
  onDelete(id);
};

const DeleteLabel = "x";
const IncrementLabel = "+";
const DecrementLabel = "-";

const Counter = ({ counter, children, onDelete, onIncrement, onDecrement }) => {
  return (
    <div>
      {children}
      <span className={getBadgeClasses(counter)}>{formatCount(counter)}</span>
      <button
        onClick={() => handleIncrement(onIncrement, counter.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        {IncrementLabel}
      </button>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => handleDecrement(onDecrement, counter.id)}
      >
        {DecrementLabel}
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => handleDelete(onDelete, counter.id)}
      >
        {DeleteLabel}
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
