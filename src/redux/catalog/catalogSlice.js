import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    page: 1,
  },
  reducers: {
    setAdverts: (state, action) => {
      state.adverts = [...state.adverts, ...action.payload];
      // state.page = state.page + 1;
    },
    onNextPage: (state) => {
      state.page = state.page + 1;
    },
  },
});

export const { setAdverts, onNextPage } = catalogSlice.actions;
export default catalogSlice.reducer;
