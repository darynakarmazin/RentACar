import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    page: 1,
  },
  reducers: {
    getAdverts: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
    },
    onNextPage: (state) => {
      state.page = state.page + 1;
    },
  },
});

export const { getAdverts, onNextPage } = catalogSlice.actions;
export default catalogSlice.reducer;
