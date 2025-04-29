import { createSlice } from "@reduxjs/toolkit";

const passwordVisibilitySlice = createSlice({
  name: "passwordVisibility",
  initialState: {
    isPasswordVisible: false,
  },
  reducers: {
    togglePasswordVisibility: (state) => {
      state.isPasswordVisible = !state.isPasswordVisible;
    },
  },
});

export const { togglePasswordVisibility } = passwordVisibilitySlice.actions;
export default passwordVisibilitySlice.reducer;
