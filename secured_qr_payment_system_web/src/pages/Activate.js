import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Spinner = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

const Activate = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");

    if (token) {
      axios
        .get(`http://localhost:8080/auth/activate?token=${token}`)
        .then((response) => {
          if (response.status === 200) {
            setSuccess(true);
            setLoading(false);
            setTimeout(() => {
              navigate("/login");
            }, 1000); // Redirect to login after 3 minutes
          } else {
            setError("An error occurred while processing the token.");
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error.response.data.data);
          setLoading(false);
        });
    } else {
      setError("No token found in the URL.");
      setLoading(false);
    }
  }, [location, navigate]);

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      {loading ? (
        <Spinner /> // Show the spinner while processing the request
      ) : (
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          {success ? (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="bg-white p-8 rounded shadow-lg">
                <p className="mb-4 text-green-500">
                  Account activated successfully, redirecting to login
                </p>
                <Spinner />
              </div>
            </div>
          ) : error ? (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="bg-white p-8 rounded shadow-lg">
                <p className="mb-4 text-red-500">{error}</p>
                <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Okay
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
};

export default Activate;
