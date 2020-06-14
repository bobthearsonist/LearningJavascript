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
    <div className="container">
      <div className="row">
        <div className="col">
          <div className={getBadgeClasses(counter)}>{formatCount(counter)}</div>
        </div>
        <div className="col">{children}</div>
        <div className="col">
          <div className="row">
            <div className="col">
              <button
                onClick={() => handleIncrement(onIncrement, counter.id)}
                className="btn btn-secondary btn-sm m-2 btn-block"
              >
                {IncrementLabel}
              </button>
            </div>
            <div className="col">
              {" "}
              <button
                className={getDecrementClasses(counter)}
                onClick={() => handleDecrement(onDecrement, counter.id)}
                disabled={counter.value === 0 ? true : false}
              >
                {DecrementLabel}
              </button>{" "}
            </div>
            <div className="col">
              {" "}
              <button
                className="btn btn-secondary btn-danger btn-sm m-2 btn-block"
                onClick={() => handleDelete(onDelete, counter.id)}
              >
                {DeleteLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
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

const getDecrementClasses = (counter) => {
  let classes = ["btn", "btn-secondary", "btn-sm", "m-2", "btn-block"];
  return (counter.value === 0 ? [...classes, "disabled"] : classes).join(" ");
};

const formatCount = (counter) => {
  return counter.value === 0 ? "Zero" : counter.value;
};

export default Counter;
