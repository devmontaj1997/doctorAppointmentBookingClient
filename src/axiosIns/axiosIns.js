// create api axios instance

import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://doctor-appoinment-booking-backend.onrender.com/api/v1/auth/users",
  withCredentials: true,
  timeout: 20000,
});
