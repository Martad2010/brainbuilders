/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceOptions {
  name: string; // Name of the slice
}

const initialState: initType = {
  data: null,
  search: "",
  status: "",
  mainSearch: null,
  isFound: false,
};

const defaultReducer = {
  getSearchLogger: (state: initType, { payload }: PayloadAction<any>) => {
    state.mainSearch =
      payload?.search === state?.search
        ? payload?.data || payload
        : state?.mainSearch;
    state.isFound = true;
  },
  getSearch: (state: initType, { payload }: PayloadAction<any>) => {
    state.search = payload?.search || payload?.data || payload;
  },
  resetLoggerSearch: (state: initType) => {
    state.search = "";
    state.mainSearch = null;
    state.isFound = false;
  },
  getLogger: (state: initType, { payload }: PayloadAction<any>) => {
    state.data = payload?.data || payload;
  },
  getDynamicLogger: (state: initType, { payload }: PayloadAction<any>) => {
    let data = payload?.data || payload;
    const prop: string = payload?.prop;
    if (prop) {
      const newData = Array?.isArray(data) ? data : { ...data };
      delete newData?.prop;

      data = newData;
    }
    state[prop] = data;
  },
  resetDynamicLogger: (state: initType, { payload }: PayloadAction<any>) => {
    const prop: string = payload?.prop;
    state[prop] = null;
  },
  addLogger: (state: initType, { payload }: PayloadAction<any>) => {
    const data = payload?.data || payload;
    state.data = {
      ...state?.data,
      docs: state?.data?.docs ? [data, ...state?.data?.docs] : [data],
      totalDocs: state?.data?.totalDocs ? 1 + state?.data?.totalDocs : 1,
      docsTotal: state?.data?.docsTotal ? 1 + state?.data?.docsTotal : 1,
    };
  },
  addDynamicLogger: (state: initType, { payload }: PayloadAction<any>) => {
    let data = payload?.data || payload;
    const prop: string = payload?.prop;
    if (prop) {
      const newData = { ...data };
      delete newData?.prop;

      data = newData;
    }
    state[prop] = {
      ...state?.[prop],
      docs: state?.[prop]?.docs ? [data, ...state?.[prop]?.docs] : [data],
      totalDocs: state?.[prop]?.totalDocs ? 1 + state?.[prop]?.totalDocs : 1,
      docsTotal: state?.[prop]?.docsTotal ? 1 + state?.[prop]?.docsTotal : 1,
    };
  },
  editLogger: (state: initType, { payload }: PayloadAction<any>) => {
    const data = payload?.data || payload;
    state.data = {
      ...state?.data,
      docs: state?.data?.docs
        ? EditData(state?.data?.docs, data)
        : state?.data?.docs,
    };
  },
  editDynamicLogger: (state: initType, { payload }: PayloadAction<any>) => {
    let data = payload?.data || payload;
    const prop: string = payload?.prop;
    if (prop) {
      const newData = { ...data };
      delete newData?.prop;

      data = newData;
    }
    state[prop] = {
      ...state?.[prop],
      docs: state?.[prop]?.docs
        ? EditData(state?.[prop]?.docs, data)
        : state?.[prop]?.docs,
    };
  },
  deleteLogger: (state: initType, { payload }: PayloadAction<any>) => {
    const data = payload?.data || payload;
    state.data = {
      ...state?.data,
      docs: state?.data?.docs
        ? DeleteData(state?.data?.docs, data)
        : state?.data?.docs,
      totalDocs: state?.data?.totalDocs ? state?.data?.totalDocs - 1 : 0,
      docsTotal: state?.data?.docsTotal ? state?.data?.docsTotal - 1 : 0,
    };
  },
  deleteDynamicLogger: (state: initType, { payload }: PayloadAction<any>) => {
    let data = payload?.data || payload;
    const prop: string = payload?.prop;
    if (prop) {
      const newData = { ...data };
      delete newData?.prop;

      data = newData;
    }
    state[prop] = {
      ...state?.[prop],
      docs: state?.[prop]?.docs
        ? DeleteData(state?.[prop]?.docs, data)
        : state?.[prop]?.docs,
      totalDocs: state?.[prop]?.totalDocs ? state?.[prop]?.totalDocs - 1 : 0,
      docsTotal: state?.[prop]?.docsTotal ? state?.[prop]?.docsTotal - 1 : 0,
    };
  },
  loggerFail: (state: initType) => {
    state.status = "";
    state.isFound = false;
  },
};

// Generic class to create a slice
class LoggerSlice {
  private readonly name: string;
  private readonly initialState: initType;

  constructor({ name }: SliceOptions) {
    this.name = name;
    this.initialState = initialState;
  }

  public createSlice() {
    return createSlice({
      name: this.name,
      initialState: this.initialState,
      reducers: { ...defaultReducer, resetState: () => this.initialState },
    });
  }
}

export const EditData = (data: payData[], payload: payData) => {
  const updatateData =
    data?.length > 0
      ? data.map((item) => (item._id !== payload._id ? item : payload))
      : data;
  return updatateData;
};

export const DeleteData = (data: payData[], payload: payData) => {
  const filterItem =
    data?.length > 0
      ? [...data.filter((item) => item._id !== payload._id)]
      : [];
  return filterItem;
};

// Socket-Data
export const socketSlice = new LoggerSlice({
  name: "socket",
}).createSlice();

export const {
  loggerFail: socketFail,
  getLogger: getSocket,
  resetState: logoutSocket,
  getDynamicLogger: getDynamicSocketLogger,
  resetDynamicLogger: resetDynamicSocketLogger,
} = socketSlice.actions;


// Category
export const categorySlice = new LoggerSlice({
	name: "category",
}).createSlice();

export const {
	loggerFail: categoryFail,
	getLogger: getCategory,
	getSearchLogger: getSearchCategory,
	getSearch: getSearchCategoryValue,
	resetLoggerSearch: resetCategorySearch,
	resetState: logoutCategory,
	addLogger: addCategory,
	getDynamicLogger: getDynamicCategoryLogger,
	deleteLogger: deleteCategory,
	editLogger: editCategory,
	addDynamicLogger: addDynamicCategoryLogger,
	editDynamicLogger: editDynamicCategoryLogger,
	resetDynamicLogger: resetDynamicCategoryLogger,
} = categorySlice.actions;
