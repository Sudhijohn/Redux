import { shoppingApp } from "./dummyData";

const { cart: initialState } = shoppingApp;

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    const newState = { ...state };
    newState.totalItems += action.payload.quantity;
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    let addedItem;
    if (existingItemIndex >= 0) {
      addedItem = state.cartItems[existingItemIndex];
      addedItem.quantity += action.payload.quantity;
      addedItem.total += action.payload.quantity * action.payload.price;
      newState.cartItems[existingItemIndex] = addedItem;
      return newState;
    } else {
      addedItem = {
        ...action.payload,
        total: action.payload.quantity * action.payload.price,
      };
      newState.cartItems.push(addedItem);
      return newState;
    }
  }
  if (action.type === "REMOVE") {
    const newState = { ...state };
    newState.totalItems -= action.payload.quantity;
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    let removedItem = newState.cartItems[existingItemIndex];

    if (removedItem.quantity > 1) {
      removedItem.quantity -= action.payload.quantity;
      removedItem.total -= action.payload.quantity * removedItem.price;
      newState.cartItems[existingItemIndex] = removedItem;
      return newState;
    } else {
      newState.cartItems.splice(existingItemIndex, 1);
      return newState;
    }
  }
  return state;
};

export default cartReducer;
