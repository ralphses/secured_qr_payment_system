import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formErrors, setFormErrors] = useState({email: '', password: ''});

    const handleLogin = async () => {
        let errors = {email: '', password: ''};
        let isValid = true;

        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            isValid = false;
        }

        if (!isValid) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {email, password});

            if (response.status === 200) {
                localStorage.setItem('authenticated', "true")
                localStorage.setItem('token', response.data.data.token)
                setIsAuthenticated(true);
                setShowSuccessModal(true);
                setTimeout(() => {
                    setShowSuccessModal(false);
                    window.location.href = '/dashboard';
                }, 3000);
            } else {
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setShowModal(true);
        }
    };

    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
                <div className="mb-4">
                    <p className="text-gray-600">Sign In</p>
                    <h2 className="text-xl font-bold">See what QR code to create</h2>
                </div>
                <div>
                    <input
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                </div>
                <div>
                    <input
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
                </div>
                <div>
                    <button
                        onClick={handleLogin}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                    >
                        Sign In
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <label htmlFor="comments" className="ml-2 text-sm font-normal text-gray-600">
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a className="text-sm text-blue-600 hover:underline" href="/forgot-password">
                            Forgot password?
                        </a>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className="mb-4 text-red-500">Authentication failed. Please try again.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            )}
            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className="mb-4 text-green-500">Authentication successful. Redirecting...</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Login;
