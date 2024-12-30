import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../axiosIns/axiosIns";

// user register  (default register)api slice

export const userRegisterApiSlice = createAsyncThunk(
  "user/registerApiSlice",
  async (data) => {
    try {
      const response = await API.post("/", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// user login api slice

export const userLoginApiSlice = createAsyncThunk(
  "user/loginApiSlice",
  async (data) => {
    try {
      const response = await API.post("/login", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//  authorizedUserApiSlice

export const authorizedUserApiSlice = createAsyncThunk(
  "user/authorizedUserApiSlice",
  async () => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");
    try {
      const response = await API.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
