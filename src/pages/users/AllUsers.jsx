import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/users/userService'; // Import the function to fetch users
import { useSelector } from 'react-redux';

const AllUsers = () => {
    // Array to store user data
    const [users, setUsers] = useState([]);
    // Boolean to indicate loading state
    const [loading, setLoading] = useState(true);
    // String to hold error messages
    const [error, setError] = useState(null);
    // Access user role from Redux
    const { token } = useSelector((state) => state.user);
    // console.log('Role en AllUsers: ', role);

    // useEffect hook to fetch users when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Call the getUsers function to retrieve user data
                const usersData = await getUsers(token);
                // Update the users state with the fetched data
                setUsers(usersData);
            } catch (error) {
                // Set the error state with a relevant message, falling back to a default
                setError(error.response?.data.message || "Failed to load users.");
            } finally {
                // Set loading to false after the fetch attempt (successful or failed)
                setLoading(false);
            }
        };
        // Invoke the fetchUsers function to initiate data fetching
        fetchUsers();
    }, [token]);

    const handleDeleteUser = async (userId) => {
        console.log("This user ID: ", userId)
        try {
            const deletedUser = await deleteUser(userId, token);
            // Update the users state to reflect the deletion
            setUsers((prevUsers) => prevUsers.filter(user => user._id !== deletedUser._id));
            alert('User deleted successfully.');
        } catch (error) {
            alert('Failed to delete user: ' + error.response?.data.message || 'An error occurred.');
        }
    };

    // Conditional rendering based on loading and error states
    if (loading) return <div>Loading...</div>; // Show loading message while data is being fetched
    if (error) return <div>{error}</div>; // Display error message if fetching failed

    // Render the list of users or a message if no users are found
    return (
        <div>
            <h1>All Users</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.name} - {user.username}
                            <button onClick={() => handleDeleteUser(user._id)}>Delete</button> {/* Button to delete user */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p> // Message if there are no users
            )}
        </div>
    );
};

export default AllUsers;
