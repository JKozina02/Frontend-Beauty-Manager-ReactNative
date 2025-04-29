import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword, setLoader, resetForm } = formSlice.actions;

export const selectForm = (state) => state.form;

export default formSlice.reducer;
