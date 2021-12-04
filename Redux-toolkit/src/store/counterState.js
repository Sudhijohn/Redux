import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  toggleCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increment5(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;

export default counterSlice;
