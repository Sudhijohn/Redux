import { shoppingApp } from "./dummyData";

const { products: initialState } = shoppingApp;

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
