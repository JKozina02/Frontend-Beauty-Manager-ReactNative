import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    jwtToken: null,
    user: null,
    expiresAt: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.jwtToken = action.payload.jwtToken;
      state.user = action.payload.user;
      state.expiresAt = action.payload.expiresAt;
    },
    clearAuthData: (state) => {
      state.jwtToken = null;
      state.user = null;
      state.expiresAt = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
