// Importing createSlice from Redux Toolkit to create a slice of the Redux store
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Import the signin function from the userService
import { signinUser } from '../services/users/userService';

// Create an async thunk for SignIn
export const signInThunk = createAsyncThunk(
    'user/signIn',
    async (credentials, { dispatch }) => {
        const response = await signinUser(credentials);
        // Dispatch the setUser action after a successful response
        dispatch(setUser({
            userId: response._id,
            token: response.token,
            role: response.role,
            tokenExpiryTime: response.expiresIn * 1000 // Set expiry time in milliseconds
        }));
        return response;
    }
);

// Creating a slice for user data management
const userSlice = createSlice({
    // Name of the slice, used for action types and state
    name: 'user',
    // Initial state for the user slice
    initialState: {
        userId: null, // ID of the user, initially set to null
        token: null, // Authentication token, initially set to null
        role: null, // User role, initially set to null
        isLoggedIn: false, // Flag indicating if the user is logged in, initially set to false
        tokenExpiryTime: null, // Add expiry time for token
    },
    // Reducers for managing user state
    reducers: {
        // Action to set the user data in the state
        setUser: (state, action) => {
            // Updating the state with user ID, token, and role from the action payload
            state.userId = action.payload.userId;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isLoggedIn = true; // Setting the logged-in flag to true
            state.tokenExpiryTime = action.payload.expiresIn * 1000; // Set expiry time in milliseconds
        },
        // Action to clear user data from the state
        clearUser: (state) => {
            // Resetting the user state to initial values
            state.userId = null;
            state.token = null;
            state.role = null;
            state.isLoggedIn = false; // Setting the logged-in flag to false
            state.tokenExpiryTime = null; // Clear token expiration
        },
    },
    // Handle async actions in extraReducers
    extraReducers: (builder) => {
        builder
            .addCase(signInThunk.fulfilled, (state, action) => {
                // Use action.payload to set the user state
                const { _id, token, role, expiresIn } = action.payload;
                state.userId = _id;
                state.token = token;
                state.role = role;
                state.isLoggedIn = true;
                state.tokenExpiryTime = expiresIn * 1000; // Set expiry time in milliseconds
                state.error = null; // Clear error
            })
            .addCase(signInThunk.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

// Exporting the actions to be used in components
export const { setUser, clearUser } = userSlice.actions;
// Exporting the reducer to be used in the store
export default userSlice.reducer;