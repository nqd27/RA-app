import { createSelector } from "@reduxjs/toolkit";

export const getProfile = (state) => state.account.profile;
