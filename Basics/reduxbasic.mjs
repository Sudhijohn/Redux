import { createStore } from "redux";

const initialState = {
  age: 21,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.val;
  }
  return newState;
};

const store = createStore(myReducer);
// store.subscribe(() => {
//   console.log("State changed", store.getState());
// });

console.log(store);
store.dispatch({ type: "ADD", val: 10 });
console.log(store.getState());
