import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SetAuthToken, SetDefaultHeaders, TOKEN } from "../../Config";
import axios, { AxiosError, isAxiosError } from "axios";
import { getErrorText } from "./errorReducer";
import { toast } from "react-toastify";

interface UserState {
  isAuth: boolean;
  user: UserType | null;
  loading: boolean;
  [key: string]: any;
}

type Login = {
  token?: string;
  user: UserType | null;
  data?: UserType | null;
};

const initialState: UserState = {
  isAuth: false,
  user: null,
  loading: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<Login>) => {
      if (payload.token) {
        localStorage.setItem(TOKEN, payload.token);
        SetAuthToken(payload.token);
      }
      if (payload?.user) state.user = payload.user;
      if (payload?.data) state.user = payload?.data;
      state.isAuth = true;
    },
    getUserDetails: (state, { payload }: PayloadAction<Login>) => {
      if (payload.token) {
        localStorage.setItem(TOKEN, payload.token);
        SetAuthToken(payload.token);
      }
      if (payload?.user) state.user = payload.user;
      if (payload?.data) state.user = payload?.data;
      state.isAuth = true;
      state.loading = false;
    },
    getDynamicLogger: (state, { payload }: PayloadAction<any>) => {
      let data = payload?.data || payload,
        prop: string = payload?.prop;
      if (prop) {
        let newData = { ...data };
        delete newData?.prop;

        data = newData;
      }
      state[prop] = data;
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem(TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload) {
        // state.user = payload.data;
        // state.profile = payload.profile;
      }
      state.isAuth = true;
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.loading = false;
      state.isAuth = false;
    });
  },
});

export const {
  login,
  logout,
  getUserDetails,
  getDynamicLogger: getUserDynamic,
} = UserSlice.actions;

export default UserSlice.reducer;

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, thunkApi) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      console.log({ token });
      SetDefaultHeaders();
      SetAuthToken(token);
      try {
        const res = await axios.get("/api/v1/user/profile?_populate=createdBy");
        // console.log({ res });

        const userData = (await res.data.data) satisfies UserType;
        thunkApi.dispatch(getUserDetails(res?.data));
        return userData;
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        if (isAxiosError(error)) {
          if (error) console.log({ error: error?.response?.data, err: error });
          const err = error as AxiosError;
          if (err?.response?.data) {
            let { error: errors, message: message2 }: resErr =
              err?.response?.data;
            if (errors && errors?.length > 1) {
              console.log({ errArr: errors });
            } else {
              let errMsg =
                  error?.response?.data?.message ||
                  error?.response?.data?.error?.[0]?.message ||
                  error?.response?.data?.error?.[0]?.msg ||
                  error?.message,
                possibleLogout: string[] = [
                  "Invalid Authentication, Unauthorized User",
                  "Unauthorized User, User not found",
                  // "Forbidden, Unauthorized User",
                ];

              if (possibleLogout?.includes(errMsg)) {
                localStorage.clear();
                window.location.replace("/");
              } else console.log({ errMsg });
            }
            if (err) console.log({ error: err.response?.data, err });
            if (err?.response?.status === 429)
              toast.error(err?.response?.data as string);
            // getUserFail();
            console.log({ here: errors, message2 });
            thunkApi?.dispatch(
              getErrorText(message2 || errors?.[0]?.message || message || ""),
            );
          }
        } else {
          console.log({ errMsg: message });
        }

        console.log({ loadUserError: error });
        return thunkApi.rejectWithValue(error);
      }
    }
  },
);
