import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams to access the userId
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../../store/userSlice'; // Import the thunk for fetching user by ID
import { editUser } from '../../../services/users/userService'; // Import the editUser service

const UserEditForm = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token, currentUser, error } = useSelector((state) => state.user); // Get token and current user
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        role: '',
        password: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch user details when the component mounts
    useEffect(() => {
        if (id && token) {
            dispatch(fetchUserById({ userId: id, token })); // Fetch user by ID
        }
    }, [dispatch, id, token]);

    // Set formData when currentUser is updated
    useEffect(() => {
        if (currentUser) {
            setFormData({
                name: currentUser.name || '',
                username: currentUser.username || '',
                role: currentUser.role || '',
                userId: currentUser._id || '',
                password: '',
            });
        }
    }, [currentUser]);

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new object that omits empty fields
        const filteredFormData = Object.fromEntries(
            Object.entries(formData).filter(([key, value]) => value.trim() !== '')
        );

        try {
            await editUser(filteredFormData, token); // Call the editUser service
            setSuccessMessage('User updated successfully!');
            navigate('/users'); // Navigate back to users
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Role:
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                    >
                        <option value="employee">Employee</option>
                        <option value="client">Client</option>
                    </select>
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UserEditForm;
