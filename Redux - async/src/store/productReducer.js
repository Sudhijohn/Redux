import { shoppingApp } from "./dummyData";

const { products: initialState } = shoppingApp;

const productsReducer = (state = initialState, action) => {
  if (action.type === "LOAD") {
    return action.payload;
  }
  return state;
};

export default productsReducer;
