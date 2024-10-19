// src/pages/users/components/SignInForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../../services/users/userService';


const SignInForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await signinUser(formData); // Call the signinUser function
            console.log(response); // Logs the response with token and user data
            console.log(formData); // Logs the submitted form data

            // Check if a token exists in the response, which indicates successful sign-in
            if (response.token) {
                // Redirect to home or another page on successful sign-in
                navigate('/users');
            }
        } catch (error) {
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
