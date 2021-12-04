import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterState";

const Counter = () => {
  const toggleCounter = useSelector((state) => state.counter.toggleCounter);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const incrementFiveHandler = () => {
    dispatch(counterActions.increment5(5)); // {type: unique_identifier,payload:5}
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
