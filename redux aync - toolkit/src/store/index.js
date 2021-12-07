import { cartReducer } from "./cartState";
import { productReducer } from "./productState";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { products: productReducer, cart: cartReducer },
});

export default store;
