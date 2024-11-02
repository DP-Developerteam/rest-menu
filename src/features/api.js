//Import Axios
import axios from 'axios';
//Import Store-Redux
// import { store } from '../store/store';

// Create an Axios instance with default settings
const api = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://rest-menu-backend.vercel.app/',
    timeout: 10000,
});

// // Optional: Add request interceptors if needed
// api.interceptors.request.use(
//     (config) => {
//         const token="hola"
//         // // Gest current state from Redux
//         // const state = store.getState();
//         // // Get token from Redux Store
//         // const token = state.user.token;

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`; // Attach token to the Authorization header
//             console.log("Headers Authorizationapi.js V2", config.headers.Authorization)
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// Function to set the Authorization header with the token
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

// Optional: Add response interceptors if needed
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
