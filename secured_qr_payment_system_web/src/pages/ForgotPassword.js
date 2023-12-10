import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({ email: '' });

  const handleForgotPassword = async () => {
    let errors = { email: '' };
    let isValid = true;

    if (!email) {
      errors.email = 'Email Address is required';
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    try {
      // Simulating the password reset process (replace this with your actual logic)
      // Here, a successful password reset will navigate to the login page after a delay
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        window.location.href = '/login';
      }, 3000);
    } catch (error) {
      console.error('Error occurred:', error);
      setShowModal(true);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Forgot Password</p>
          <h2 className="text-xl font-bold">Recover your password</h2>
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
        </div>
        <div>
          <button
            onClick={handleForgotPassword}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
          >
            Reset Password
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="mb-4 text-red-500">Password reset failed. Please try again.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ForgotPassword;
