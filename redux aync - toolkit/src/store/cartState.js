import { createSlice } from "@reduxjs/toolkit";
import { shoppingApp } from "./dummyData";

const { cart: initialState } = shoppingApp;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.totalItems += action.payload.quantity;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const addedItem = state.cartItems[existingItemIndex];
        addedItem.quantity += action.payload.quantity;
        addedItem.total += action.payload.quantity * action.payload.price;
        state.cartItems[existingItemIndex] = addedItem;
      } else {
        const addedItem = {
          ...action.payload,
          total: action.payload.quantity * action.payload.price,
        };
        state.cartItems.push(addedItem);
      }
    },
    remove(state, action) {
      state.totalItems -= action.payload.quantity;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[existingItemIndex].quantity > 1) {
        state.cartItems[existingItemIndex].quantity -= action.payload.quantity;
        state.cartItems[existingItemIndex].total -=
          action.payload.quantity * state.cartItems[existingItemIndex].price;
      } else {
        state.cartItems.splice(existingItemIndex, 1);
      }
    },
    toggle(state) {
      state.displayCart = !state.displayCart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
