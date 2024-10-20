// Importing createSlice from Redux Toolkit to create a slice of the Redux store
import { createSlice } from '@reduxjs/toolkit';

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
        },
        // Action to clear user data from the state
        clearUser: (state) => {
            // Resetting the user state to initial values
            state.userId = null;
            state.token = null;
            state.role = null;
            state.isLoggedIn = false; // Setting the logged-in flag to false
        },
    },
});

// Exporting the actions to be used in components
export const { setUser, clearUser } = userSlice.actions;
// Exporting the reducer to be used in the store
export default userSlice.reducer;