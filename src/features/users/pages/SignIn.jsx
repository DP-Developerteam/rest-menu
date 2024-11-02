// Import styles and libraries
import '../../../App.scss';
import React from 'react';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
    return (
        <div className="signin-page">
            <h2>Sign In</h2>
            <SignInForm />
        </div>
    );
};

export default SignIn;
