import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";

const Counter = () => {
  const toggleCounter = useSelector((state) => state.toggleCounter);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementFiveHandler = () => {
    dispatch({ type: "increment5", value: 5 });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggleCounter" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {toggleCounter && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={incrementFiveHandler}>Increment by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
