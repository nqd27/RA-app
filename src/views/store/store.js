import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./sclice/cartSlice";
import accountSlice from "./sclice/accountSlice";
import adminSlice from "./sclice/adminSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    account: accountSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export default store;
