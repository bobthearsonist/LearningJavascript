import React from "react";
import Counter from "./counter";

const handleDelete = (onDelete, counterId) => {
  console.log("passing delete received " + counterId);
  onDelete(counterId);
};
const handleIncrement = (onIncrement, counterId) => {
  console.log("passing increment received " + counterId);
  onIncrement(counterId);
};
const handleDecrement = (onDecrement, counterId) => {
  console.log("passing increment received " + counterId);
  onDecrement(counterId);
};
const Counters = ({ counters, onDelete, onDecrement, onIncrement }) => {
  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={(counterId) => handleDelete(onDelete, counterId)}
          onIncrement={(counterId) => handleIncrement(onIncrement, counterId)}
          onDecrement={(counterId) => handleDecrement(onDecrement, counterId)}
        >
          <h3>Counter # {counter.id}</h3>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
