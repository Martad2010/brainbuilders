import { createSlice } from "@reduxjs/toolkit";

type initErrType = {
	error?: errArr[] | null;
	id?: string;
	status?: number | null;
	errorText?: string;
};

const initialState: initErrType = {
  error: null,
  id: "",
  status: null,
  errorText: "",
};

export const errorSlice = createSlice({
	name: "error",
	initialState,
	reducers: {
		returnErrors: (state, { payload }) => {
			state.error = payload?.error || payload;
			state.id = payload?.id;
			state.status = payload?.status;
		},
		getErrorText: (state, { payload }) => {
			state.errorText = payload;
		},
		clearErrors: state => {
			state.error = null;
			state.errorText = "";
			state.status = null;
		},
	},
});

export const { returnErrors, getErrorText, clearErrors } = errorSlice.actions;
