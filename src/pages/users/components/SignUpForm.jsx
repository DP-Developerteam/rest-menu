// src/pages/users/components/SignUpForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import apiUser from '../../../services/users/userService'; // Update the path according to your structure
import { signupUser } from '../../../services/users/userService';


const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        role: 'client',
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
            // Directly calling signupUser
            const response = await signupUser(formData);
            // Assuming the successful response has a specific structure, e.g. a message or user object
            if (response && response.message) { // Check if response has a message property
                navigate('/signin'); // Navigate on successful sign-up
            }
        } catch (error) {
            console.error('Signup error:', error); // Log the full error for debugging
            const message = error.response?.data?.message || 'An error occurred during sign up.';
            setErrorMessage(message);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
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
            <div>
                <label>Role:</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="client">Client</option>
                    <option value="employee">Employee</option>
                </select>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
