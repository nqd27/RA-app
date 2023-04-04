import { createSelector } from "@reduxjs/toolkit";

export const getCart = (state) => state.cart.cartList;

export const getTotalPrice = (state) => state.cart.totalPrice;
