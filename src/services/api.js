//Import Axios
import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000',
    timeout: 10000,
});

// Optional: Add request interceptors if needed
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Attach token to the Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Optional: Add response interceptors if needed
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
