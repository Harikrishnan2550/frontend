// import axios from "axios";

// axios.defaults.baseURL = "https://backend.lovethatcomic.com/api/v1/profiles/";

// axios.defaults.timeout = 60000;

// axios.interceptors.response.use(function (response) {
    
//     return response;
// }, function (error) {
//     if (error.response.status === 401) {
//         localStorage.clear()
//         sessionStorage.clear()
//         window.location.reload()
//     }
//     return Promise.reject(error);
// });

// export default axios


import axios from "axios";

// Use env variable if available, else fallback to localhost
const API_BASE_URL =
  process.env.REACT_APP_API_URL || `${process.env.REACT_APP_API_URL}/api`;

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you're using cookies/JWT authentication
});

export default axiosInstance;
