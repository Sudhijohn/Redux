import { combineReducers, createStore, applyMiddleware } from "redux";
import productsReducer from "./productReducer";
import cartReducer from "./cartReducer";
import thunk from "redux-thunk";

const shoppingReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(shoppingReducer, applyMiddleware(thunk));

export default store;
