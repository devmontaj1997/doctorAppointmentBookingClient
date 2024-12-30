// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Add user slice to the reducer
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),

  devTools: true,
});

export default store;
