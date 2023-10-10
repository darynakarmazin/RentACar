import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://651fc0b1906e276284c373de.mockapi.io/api/v1/";

export const setAdverts = createAsyncThunk(
  "catalog/fetchAdverts",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/adverts", {
        params: { page: page, limit: 8 },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAllAdverts = createAsyncThunk(
  "catalog/fetchAllAdverts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
