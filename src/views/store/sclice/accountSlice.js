import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { firebaseConfig } from "../../../firebase/config";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

let accountSlice = createSlice({
  name: "account",
  initialState: {
    profile: {},
  },

  reducers: {
    getProfile: (state, { payload }) => {
      state.profile = payload;
    },
  },

  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchAllUser.fulfilled, (state, action) => {
  //         state.profile = action.payload;
  //       })
  //       .addCase(updatePro.fulfilled, (state, { payload }) => {
  //         // console.log(payload);
  //         state.profile = payload;
  //       });
  //   },
});

export default accountSlice;
