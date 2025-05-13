import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: {
      isFiltersVisible: true, // Должно быть true после нажатия кнопки
      filters: {
        category: null,
        priceRange: [0, 2500],
        dates: [],
      },
    },
  },
  reducers: {
    showModal: (state) => {
      console.log("showModal called");
      state.filter.isFiltersVisible = true;
    },
    hideModal: (state) => {
      console.log("hideModal called");
      state.filter.isFiltersVisible = false;
    },

    addDate: (state, action) => {
      state.filter.filters.dates.push(action.payload);
    },

    removeDate: (state, action) => {
      state.filter.filters.dates = state.filters.dates.filter((date) => date !== action.payload);
    },

    setCategory: (state, action) => {
      state.filter.filters.category = action.payload;
    },

    setPriceRange: (state, action) => {
      state.filter.filters.priceRange = action.payload;
    },

    setRating: (state, action) => {
      state.filter.filters.rating = action.payload;
    },

    resetFilters: (state) => {
      state.filter.filters = {
        category: null,
        priceRange: [0, 2500],
        dates: [],
      };
    },
  },
});

export const { showModal, hideModal, addDate, removeDate, setCategory, setPriceRange, setRating, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
