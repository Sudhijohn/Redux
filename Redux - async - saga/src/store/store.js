import { combineReducers, createStore, applyMiddleware } from "redux";
import productsReducer from "./productReducer";
import cartReducer from "./cartReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./productSaga";

const shoppingReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(shoppingReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const action = (type) => store.dispatch({ type });

export default store;
