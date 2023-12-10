import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleRegistration = async () => {
    let errors = { fullName: "", email: "", password: "", confirmPassword: "" };
    let isValid = true;

    if (!fullName) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email Address is required";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.password = "Passwords do not match";
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const userData = {
        name: fullName,
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:8080/auth/register",
        userData
      );

      if (response.status === 201) {
        setResponseMsg(response.data.data);
        setSuccessful(true);
        setShowModal(true);
        setConfirmPassword("");
        setEmail("");
        setPassword("");
        setFullName("");
        setLoading(false);
      }
    } catch (error) {
      setSuccessful(false);
      setResponseMsg(error.response.data.data);
      setShowModal(true);
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Secure Registration</p>
          <h2 className="text-xl font-bold">
            Register to become a verified payment recipient
          </h2>
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {formErrors.fullName && (
            <p className="text-red-500">{formErrors.fullName}</p>
          )}
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && (
            <p className="text-red-500">{formErrors.email}</p>
          )}
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && (
            <p className="text-red-500">{formErrors.password}</p>
          )}
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500">{formErrors.confirmPassword}</p>
          )}
        </div>
        <div>
          <button
            onClick={handleRegistration}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
          >
            {loading ? (
              <div>
                <div className="spinner-border spinner-border-sm text-light ms-2" role="status">
                  <span className="visually-hidden">Processing...</span>
                </div>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-sm text-blue-600 hover:underline"
              href="/forgot-password"
            >
              Forgot Password?
            </a>
          </div>
          <div>
            <Link to="/login">
              <button className="text-sm text-blue-600 hover:underline">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className={`mb-4 text-${successful ? 'blue' : 'red'}-500`}>{responseMsg}</p>
            <button
              onClick={() => handleModalClose()}
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

export default Registration;
