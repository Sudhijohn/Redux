import { combineReducers, createStore } from "redux";
import productsReducer from "./productReducer";
import cartReducer from "./cartReducer";

const shoppingReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(shoppingReducer);

export default store;
