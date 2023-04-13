import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let adminSlice = createSlice({
  name: "admin",
  initialState: {
    listUser: [],
    carts: [],
    Storage: [],
  },
  reducers: {
    setCarts: (state, { payload }) => {
      state.carts = payload;
    },

    setListUser: (state, { payload }) => {
      state.listUser = payload;
    },
    setStatusCart: (state, { payload }) => {
      let { iCs, iC, status } = payload;
      // console.log(iCs, iC, status);
      state.carts[iCs].cart[iC].status = status;
      // console.log(state.carts[iCs].cart[iC].status);
    },
    setRoleUser: (state, { payload }) => {
      let { a, idR } = payload;
      state.listUser.splice(idR, 1, a);
    },
    getStorage: (state, { payload }) => {
      // console.log(payload);
      state.Storage = payload;
    },
  },
});

export default adminSlice;
