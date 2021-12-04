import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: Boolean(localStorage.getItem("loggedIn")),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    logout(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
