import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterState";
import { authReducer } from "./authState";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
