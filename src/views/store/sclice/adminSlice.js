import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let adminSlice = createSlice({
  name: "admin",
  initialState: {
    listUser: [],
    carts: [],
  },
  reducers: {
    setCarts: (state, { payload }) => {
      state.carts = payload;
    },

    setListUser: (state, { payload }) => {
      state.listUser = payload;
    },
  },
});

export default adminSlice;
