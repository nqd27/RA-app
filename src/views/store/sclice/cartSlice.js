import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { firebaseConfig } from "../../../firebase/config";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalPrice: 0,
  },

  reducers: {
    getCart: (state, { payload }) => {
      // console.log(payload);
      state.cartList = payload;
      let t = 0;
      if (payload != undefined) {
        state.cartList.forEach((item, index) => {
          t += parseInt(item.price) * item.quantity;
        });

        state.totalPrice = t;
      }
    },

    setCartList: (state, { payload }) => {
      const { uid, data } = payload;
      // console.log(data);
      let check = false;
      let i = null;

      if (state.cartList != undefined) {
        state.cartList.forEach((item, index) => {
          if (item != null) {
            item.uid == uid ? (check = true) : "";
            item.uid == uid ? (i = index) : i;
          }
        });

        if (!check) {
          // console.log("The");
          if (data != null) {
            state.cartList.push(data);
          }
        } else {
          if (data != null) {
            // console.log(i);
            state.cartList[i].quantity += 1;
          }
        }
      }

      // console.log(state.cartList);
      let t = 0;
      if (payload != undefined) {
        state.cartList.forEach((item, index) => {
          t += parseInt(item.price) * item.quantity;
        });

        state.totalPrice = t;
      }

      // console.log(state.totalPrice);
    },

    changeCart: (state, { payload }) => {
      state.cartList = payload;
      let t = 0;
      if (payload != undefined) {
        state.cartList.forEach((item, index) => {
          t += parseInt(item.price) * item.quantity;
        });

        state.totalPrice = t;
      }
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

export default cartSlice;
