import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    page: 1,
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
  },
});

export const { setAdverts, onNextPage, firstAdverts } = catalogSlice.actions;
export default catalogSlice.reducer;
