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

// Define the backend URL directly
const API_BASE_URL = "http://localhost:4000/api"; // Change this to your backend URL

// Create an Axios instance with default settingss
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
