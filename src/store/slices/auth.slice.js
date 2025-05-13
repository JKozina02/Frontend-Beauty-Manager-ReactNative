import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    jwtToken: null,
    email: null,
    user: null,
    name: null,
    expiresAt: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.jwtToken = action.payload.jwtToken;
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.name = action.payload.user.name;
      state.expiresAt = action.payload.expiresAt;
    },
    clearAuthData: (state) => {
      state.jwtToken = null;
      state.user = null;
      state.email = null;
      state.name = null;
      state.expiresAt = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectUserId = (state) => state.auth.user?.id;
export default authSlice.reducer;
