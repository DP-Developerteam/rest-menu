
//Import api.js
import api from '../api';
// Add users path for the API
const API_URL = '/users';

// SIGNOUT logic is located in Component Header.
// /src/components/Header.jsx

// SIGNUP - Function to sign up a new user
export const signupUser = async (userData) => {
    try {
        // Send a POST request to the '/signup' endpoint with user data to create a new user
        const response = await api.post(`${API_URL}/signup`, userData);

        // Return the response data (likely the newly created user or a success message)
        return response.data;
    } catch (error) {
        // Log an error to the console if the signup process fails
        console.error('Error signing up:', error);

        // Re-throw the error so it can be handled by the caller (e.g., in the UI)
        throw error;
    }
};

// SIGNIN - Function to sign in a user
export const signinUser = async (credentials) => {
    try {
        // Send a POST request to the sign-in endpoint with user credentials
        const response = await api.post(`${API_URL}/signin`, credentials);

        // // Check if the response contains a token and save it to local storage
        // if (response.data && response.data.token) {
        //     localStorage.setItem('token', response.data.token); // Save the token to local storage
        // } else {
        //     console.error('No token found in response');
        // }

        // Return the response data (excluding the token if you want)
        console.log('API Response:', response.data); // Add this line
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error; // Propagate the error to the calling function for further handling
    }
};

// ALL USERS - Function to get all users
export const getUsers = async (userToken) => {
    // Make an API call to fetch all users
    const response = await api.get(API_URL, {
        headers: {
            Authorization: `Bearer ${userToken}` // Include the token in the header
        }
    });
    // Return the data received from the API
    return response.data;
};

// USER by ID - Function to get user details by ID
export const getUserById = async (userId, userToken) => {
    try {
        const response = await api.get(`${API_URL}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${userToken}` // Include the token in the header
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};


// Additional user-related functions can be added here
