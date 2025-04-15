import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    password: "",
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
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setLoader } = formSlice.actions;

export const selectForm = (state) => state.form;

export default formSlice.reducer;
