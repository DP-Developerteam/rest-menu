
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

        // return response.data;
        return {
            token: response.data.token,
            _id: response.data._id,
            role: response.data.role,
            expiresIn: response.data.expiresIn
        };
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};

// ALL USERS - Function to get all users
export const getUsers = async (userToken) => {
    // Make an API call to fetch all users
    const response = await api.get(API_URL, {
        headers: {
            // Include the token in the header
            Authorization: `Bearer ${userToken}`
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

// DELETE USER - Function to delete a user by ID
export const deleteUser = async (userId, userToken) => {
    console.log(userId);
    try {
        const response = await api.delete(`${API_URL}/delete/${userId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`, // Incluye el token en el encabezado
            }
        });
        return response.data; // Devuelve los datos del usuario eliminado
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; // Propaga el error para manejarlo en el llamador
    }
};