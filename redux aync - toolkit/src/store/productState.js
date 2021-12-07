import { shoppingApp } from "./dummyData";
const { createSlice } = require("@reduxjs/toolkit");

const { products } = shoppingApp;

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducer: {},
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
