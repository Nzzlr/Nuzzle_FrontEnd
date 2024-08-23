import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// export const signup = createAsyncThunk(
//     "auth/signup",
//     async ({}, thunkAPI) => {
//         try {

//         } catch(error) {

//         }
//     }
// )

// export const login = createAsyncThunk(
//     "auth/login",
//     async ({username, pw}, thunkAPI) => {
//         try {

//         } catch (error) {

//         }
//     }
// )

// export const logout = createAsyncThunk("auth/logout", async () => {

// })

const name = "UserSlice";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // user: null,
    // register: null,
    // isAuthenticated: false,
    // status: 'idle',
    // error: null,
    isLogin: null,
    accessToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
  // reducers: {},
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(login.pending, (state) => {
  //             state.status = 'loading';
  //         })
  //         .addCase(login.fulfilled, (state, action) => {
  //             state.user = action.payload;
  //             state.isAuthenticated = true;
  //             state.status = 'succeeded';
  //             state.error = null;
  //         })
  //         .addCase(login.rejected, (state, action) => {
  //             state.status = 'failed';
  //             state.error = action.payload;
  //         })
  //         .addCase(registerUser.fulfilled, (state, action) => {
  //             state.register = action.payload;
  //         })
  //         .addCase(logout.fulfilled, (state) => {
  //             state.user = null;
  //             state.register = null;
  //             state.isAuthenticated = false;
  //         });
  // },
  // login: (state,action) => {
  //     state.user = action.payload;
  //     state.isAuthenticated = true;
  //     // return state;
  // },
  // logout: (state) => {
  //     state.user = null;
  //     state.register = null;
  //     state.isAuthenticated = false;
  //     // return state;
  // },
  // registerUser: (state, action) => {
  //     state.register = action.payload;
  // },
  // updateUser: (state, action) => {
  //     state.user = action.payload;
  // }
});

export const { login, logout, registerUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

export const selectIsLogin = (state) => state.user.isLogin;
export const selectAccessToken = (state) => state.user.accessToken;
