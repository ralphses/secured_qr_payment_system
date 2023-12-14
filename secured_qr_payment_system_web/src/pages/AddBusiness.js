import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddBusiness = () => {
  const [section, setSection] = useState(1);

  // Business Details
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessCertificate, setBusinessCertificate] = useState(null);
  const [nin, setNIN] = useState(null);

  // Manager Details
  const [businessManagerName, setBusinessManagerName] = useState("");
  const [businessManagerPhone, setBusinessManagerPhone] = useState("");
  const [yearCreated, setYearCreated] = useState("");
  const [numOfStaff, setNumOfStaff] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleBusinessNameChange = (e) => {
    setBusinessName(e.target.value);
  };

  const handleBusinessAddressChange = (e) => {
    setBusinessAddress(e.target.value);
  };

  const handleBusinessCertificateChange = (e) => {
    setBusinessCertificate(e.target.files[0]);
  };

  const handleNINChange = (e) => {
    setNIN(e.target.files[0]);
  };

  const handleBusinessManagerNameChange = (e) => {
    setBusinessManagerName(e.target.value);
  };

  const handleBusinessManagerPhoneChange = (e) => {
    setBusinessManagerPhone(e.target.value);
  };

  const handleYearCreatedChange = (e) => {
    setYearCreated(e.target.value);
  };

  const handleNumOfStaffChange = (e) => {
    setNumOfStaff(e.target.value);
  };

  const validateSection1 = () => {
    if (!businessName || !businessAddress || !businessCertificate || !nin) {
      setModalMessage(
        "All fields in Business details section are required and must be valid"
      );
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (section === 1 && validateSection1()) {
      setSection(section + 1);
    }
  };

  const handlePrevious = () => {
    setSection(section - 1);
  };

  const validateSection2 = () => {
    if (
      !businessManagerName ||
      !businessManagerPhone ||
      !yearCreated ||
      !numOfStaff ||
      isNaN(numOfStaff) ||
      numOfStaff <= 0
    ) {
      setModalMessage(
        "All fields in Business manager section are required and must be valid"
      );
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    // Section 1 validation
    if (section === 1) {
      if (validateSection1()) {
        // Move to the next section
        setSection(2);
      }
    } else {
      // Section 2 validation
      if (validateSection2()) {
        const token = localStorage.getItem("token");

        // Create a FormData object to hold the form data
        const formData = new FormData();

        // Append data for business details
        formData.append("name", businessName);
        formData.append("address", businessAddress);
        formData.append("businessCertificate", businessCertificate);
        formData.append("nin", nin);

        // Append data for manager details
        formData.append("businessManagerName", businessManagerName);
        formData.append("businessManagerPhone", businessManagerPhone);
        formData.append("yearCreated", yearCreated);
        formData.append("numOfStaff", numOfStaff);

        try {
          // Make a POST request to the server
          const response = await axios.post(
            "http://localhost:8080/client",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          // Check the response status
          if (response.status === 201) {
            // Business added successfully
            setModalMessage("Business added successfully");
            setStatus(true);
            setShowModal(true);
          }
        } catch (error) {
          // Handle errors from the server
          setModalMessage("Failed to add business");
          setShowModal(true);
        }
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalMessage("");
    if (status) {
      navigate("/business");
    }
  };

  useEffect(() => {
    if (!loggedIn()) {
      navigate("/login");
    }
  }, []); // Add an empty dependency array to run the effect only once

  const loggedIn = () => {
    return localStorage.getItem("authenticated") === "true";
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Add New Business</p>
          <h2 className="text-xl font-bold">
            {section === 1 ? "Business Details" : "Manager Details"}
          </h2>
        </div>

        {/* Business Details Section */}
        {section === 1 && (
          <>
            <div>
              <input
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={handleBusinessNameChange}
              />
            </div>
            <div>
              <textarea
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                placeholder="Business Address"
                value={businessAddress}
                onChange={handleBusinessAddressChange}
              ></textarea>
            </div>
            <div>
              <input
                type="file"
                onChange={handleBusinessCertificateChange}
                accept="image/*"
              />
              <label>Business Certificate (Image)</label>
            </div>
            <div>
              <input type="file" onChange={handleNINChange} accept="image/*" />
              <label>NIN (Image)</label>
            </div>
          </>
        )}

        {/* Manager Details Section */}
        {section === 2 && (
          <>
            <div>
              <input
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Business Manager Name"
                value={businessManagerName}
                onChange={handleBusinessManagerNameChange}
              />
            </div>
            <div>
              <input
                type="number" // Update to tel type
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                placeholder="Business Manager Phone"
                value={businessManagerPhone}
                onChange={handleBusinessManagerPhoneChange}
                min={0}
              />
            </div>
            <div>
              <ReactDatePicker
                selected={yearCreated} // Pass the selected date (yearCreated) to the DatePicker
                onChange={(date) => setYearCreated(date)} // Set the selected date to the state
                dateFormat="yyyy" // Set the date format to display only the year
                showYearPicker
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                placeholderText="Select Year"
              />
            </div>
            <div>
              <input
                type="number" // Update to number type
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                placeholder="Number of Staff"
                value={numOfStaff}
                onChange={handleNumOfStaffChange}
                min={0}
              />
            </div>
          </>
        )}

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className={`${
              section === 1 ? "hidden" : "inline-block"
            } px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700`}
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {section === 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="mb-4 text-red-500">{modalMessage}</p>
            <button
              onClick={handleModalClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBusiness;
