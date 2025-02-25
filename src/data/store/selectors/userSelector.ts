import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const userSlice = (state: RootState) => state?.user;

export const selectAuth = createSelector([userSlice], (auth) => auth.isAuth);
export const selectLoading = createSelector(
  [userSlice],
  (loading) => loading.loading
);

export const selectUser = createSelector([userSlice], (user) => user.user);
export const selectProfile = createSelector(
  [userSlice],
  (profile) => profile.profile
);

// General User Details
const authUserSlicer = (s: RootState) => s?.user;

export const authUserSelector = createSelector([authUserSlicer], d => d);

// Error
const errorsSlicer = (s: RootState) => s?.errors;

export const errorsSelector = createSelector([errorsSlicer], error => error);

// Socket-Data
const socketSlicer = (s: RootState) => s?.socket;

export const socketSelector = createSelector([socketSlicer], d => d);