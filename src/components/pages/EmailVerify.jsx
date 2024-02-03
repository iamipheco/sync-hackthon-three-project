import React from 'react';

const EmailVerify = () => {
    return (
        <div className="container mx-auto my-10 text-center">
            <h1 className="text-3xl font-bold mb-6">Email Verification</h1>
            <p className="text-lg mb-4">
                Thank you for signing up! An email verification link has been sent to your email address.
            </p>
            <p className="text-lg">
                Please check your email and click on the verification link to complete the registration process.
            </p>
        </div>
    );
};

export default EmailVerify;