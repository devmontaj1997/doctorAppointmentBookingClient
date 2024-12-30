// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { authorizedUserApiSlice, userLoginApiSlice, userRegisterApiSlice } from "./userApiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo:  [],

    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmty: (state) => {
      state.message = null;
      state.error = null;
    },
    
  },
  extraReducers: (builder) => {
    builder
      // this user create
      .addCase(userRegisterApiSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegisterApiSlice.fulfilled, (state, action) => {
        (state.loading = false), (state.message = action.payload.message);
      })
      .addCase(userRegisterApiSlice.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      // this user Login
      .addCase(userLoginApiSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLoginApiSlice.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
        
        state.message = action.payload.message;
      })

      .addCase(userLoginApiSlice.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
        // this authorize user 
        .addCase(authorizedUserApiSlice.pending, (state) => {
          state.loading = true;
        })
        .addCase(authorizedUserApiSlice.fulfilled, (state, action) => {
          state.loading = false;
          state.userInfo = action.payload.loggedUser
          state.message = action.payload.message;
        })
  
        .addCase(authorizedUserApiSlice.rejected, (state, action) => {
          (state.loading = false), (state.error = action.error.message);
        })
  },
});

export const { setMessageEmty } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;
