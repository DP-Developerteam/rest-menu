// src/pages/users/components/SignInForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../../services/users/userService';
import { getUserById } from '../../../services/users/userService';
//REDUX imports
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/userSlice';


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
            // Call the signinUser function
            const response = await signinUser(formData);
            console.log('Sign-in response:', response);

            // Collect user Token
            const userToken = response.token;
            console.log('User Token:', userToken);

            // Collect user ID
            const userId = response._id;
            console.log('User Id:', userId);

            // Fetch user details including role
            const userDetails = await getUserById(userId, userToken);
            console.log('User details:', userDetails);

            const userRole = userDetails.role;
            console.log('User role:', userDetails);

            if (userToken) {
                // Set the user info using REDUX
                dispatch(setUser({
                    userId: userId,
                    token: userToken,
                    role: userRole
                }));
                //Conditional if to redirect based on role
                navigate(userRole === 'employee' ? '/users' : '/');
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
