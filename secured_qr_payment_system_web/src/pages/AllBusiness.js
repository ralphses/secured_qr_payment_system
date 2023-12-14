import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [businesses, setBusinesses] = useState([]);
  const [currentBusiness, setCurrentBusiness] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showApiKey, setShowApiKey] = useState({});
  const [index, setIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [businessToDelete, setBusinessToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(
          "http://localhost:8080/client",
          config
        );
        setBusinesses(response.data.data.clients);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    fetchBusinesses();
  }, []);

  const handleDelete = async (reference) => {
    setShowConfirmDeleteModal(false);
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.delete(
        `http://localhost:8080/client/${reference}`,
        config
      );
      // Check response status and notify the user accordingly
      if (response.status === 200) {
        // Deletion successful, you can set a success message here
      } else {
        // Handle other statuses if needed
      }
    } catch (error) {
      console.error("Error deleting business:", error);
      // Notify the user about the error
    }
  };

  const handleView = (business) => {
    console.log(business);
    setCurrentBusiness(business);
    setShowModal(true);
  };

  const toggleApiKeyVisibility = (reference) => {
    setShowApiKey((prevState) => ({
      ...prevState,
      [reference]: !prevState[reference],
    }));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = businesses.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="h-screen bg-gray-100 justify-center">
      <main>
        <div className="h-full mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Your Registered Businesses
          </h1>

          {businesses.length === 0 ? (
            <p className="text-gray-500 mb-4">
              No business registered yet,{" "}
              <button
                onClick={() => navigate('/business/add')}
                className="text-indigo-600 hover:text-indigo-900"
              >
                click here to add one
              </button>
              .
            </p>
          ) : (
            <button
              onClick={() => navigate('/business/add')}
              className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-700 mb-4"
            >
              Register New Business
            </button>
          )}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S/N
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  API Key
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((business) => (
                <tr key={business.reference}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {business.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {showApiKey[business.reference]
                      ? business.apiKey
                      : "************"}
                    <span
                      onClick={() => toggleApiKeyVisibility(business.reference)}
                      className="ml-2 cursor-pointer"
                    >
                      <p>
                        {showApiKey[business.reference] ? "Hide" : "View key"}
                      </p>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <button
                      onClick={() => handleView(business)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      View
                    </button>
                    <button
                      onClick={() => {
                        setBusinessToDelete(business);
                        setShowConfirmDeleteModal(true);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && currentBusiness && (
            <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
              <div className="bg-white p-8 max-w-md">
                <h2 className="text-2xl font-bold mb-4">
                  {currentBusiness.name}
                </h2>
                <p>
                  <strong>Address:</strong> {currentBusiness.address}
                </p>
                <p>
                  <strong>Reference:</strong> {currentBusiness.reference}
                </p>
                <p>
                  <strong>Manager:</strong> {currentBusiness.manager}
                </p>
                <p>
                  <strong>Manager Phone:</strong> {currentBusiness.managerPhone}
                </p>
                <p>
                  <strong>Year Created:</strong> {currentBusiness.yearCreated}
                </p>
                <p>
                  <strong>Number of Staff:</strong> {currentBusiness.noOfStaff}
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 block text-center bg-indigo-600 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {showConfirmDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
              <div className="bg-white p-8 max-w-md">
                <p>Are you sure you want to delete this business?</p>
                <button
                  onClick={() => handleDelete(businessToDelete.reference)}
                  className="mt-4 block text-center bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700"
                >
                  Yes, continue
                </button>
                <button
                  onClick={() => setShowConfirmDeleteModal(false)}
                  className="mt-4 block text-center bg-gray-600 text-white font-semibold px-4 py-2 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-center">
            {[...Array(Math.ceil(businesses.length / itemsPerPage))].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 py-2 px-3 text-indigo-600 font-medium focus:outline-none hover:bg-indigo-100 hover:text-indigo-900 ${
                    currentPage === index + 1 ? "bg-indigo-200" : ""
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
