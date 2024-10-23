// src/pages/users/components/SignInForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//REDUX imports
import { useDispatch } from 'react-redux';
import { clearUser, signInThunk } from '../../../store/userSlice';


const SignInForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            // Dispatch the loginUser thunk action
            const action = await dispatch(signInThunk(formData)).unwrap();

            // Variables to manage the SignIn
            const userToken = action.token;
            const userRole = action.role;
            const expiresIn = action.expiresIn * 1000;
            // const alertExpires = expiresIn - 20; // alert pop ups when there are 20 seconds for the auto signOut

            if (userToken) {

                //Conditional to redirect based on role after login
                navigate(userRole === 'employee' ? '/users' : '/');

                // setTimeout(() => {
                //     // ToDo ************ Create a popup to cancel the auto SignOut
                //     alert('In 20 seconds you will be automatically logout.');
                // }, alertExpires); // Call this after the expiration time

                setTimeout(() => {
                    // Redirect to homepage
                    navigate('/');
                    // Clear user when token expires
                    dispatch(clearUser());
                }, expiresIn); // Call this after the expiration time

            }

        } catch (error) {
            console.error('Sign-in error:', error); // Log the entire error object
            setErrorMessage(error.response?.data?.message || 'An error occurred during sign in.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;
