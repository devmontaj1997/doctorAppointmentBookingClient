// create api axios instance


import axios from "axios";


export const API = axios.create({
    baseURL: "http://localhost:5050/api/v1/auth/users",
    withCredentials: true,
    timeout: 20000
})
