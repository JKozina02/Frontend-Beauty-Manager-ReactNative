import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFiltersVisible: false,
  filters: {
    category: null,
    priceRange: [0, 2500],
    dates: [],
    rating: null,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isFiltersVisible = true;
    },
    hideModal: (state) => {
      state.isFiltersVisible = false;
    },
    addDate: (state, action) => {
      state.filters.dates.push(action.payload);
    },
    setDates: (state, action) => {
      state.filters.dates = action.payload;
    },
    removeDate: (state, action) => {
      state.filters.dates = state.filters.dates.filter((date) => date !== action.payload);
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setRating: (state, action) => {
      state.filters.rating = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {
        category: null,
        priceRange: [0, 2500],
        dates: [],
        rating: null,
      };
    },
  },
});

export const {
  showModal,
  hideModal,
  setDates,
  addDate,
  removeDate,
  setCategory,
  setPriceRange,
  setRating,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
