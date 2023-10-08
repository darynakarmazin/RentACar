import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    page: 1,
    filters: {
      selectedMake: "",
      selectedPrice: "",
      minMileage: "",
      maxMileage: "",
    },
  },
  reducers: {
    firstAdverts: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
      state.page = state.page + 1;
    },
    setAdverts: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
    },
    onNextPage: (state) => {
      state.page = state.page + 1;
    },
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

export const { setAdverts, onNextPage, firstAdverts, setFilters } =
  catalogSlice.actions;
export default catalogSlice.reducer;
