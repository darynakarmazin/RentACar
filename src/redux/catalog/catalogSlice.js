import { createSlice } from "@reduxjs/toolkit";
import { setAdverts, setAllAdverts } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    adverts: [],
    allAdverts: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAdverts.pending, handlePending)
      .addCase(setAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(setAdverts.rejected, handleRejected)
      .addCase(setAllAdverts.pending, handlePending)
      .addCase(setAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allAdverts = [...state.allAdverts, ...action.payload];
      })
      .addCase(setAllAdverts.rejected, handleRejected);
  },
  reducers: {
    onNextPage: (state) => {
      state.page = state.page + 1;
    },
  },
});

export const { onNextPage } = catalogSlice.actions;
export default catalogSlice.reducer;
