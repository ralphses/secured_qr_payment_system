import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const GenerateQR = () => {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [selectedBusiness, setSelectedBusiness] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [businesses, setBusinesses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token"); // Retrieving the token from local storage

        const fetchUserBusinesses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/client", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.status === 200) {
                    setBusinesses(response.data.data.clients); // Assuming the response data is an array of businesses
                }
            } catch (error) {
                console.error("Error fetching businesses:", error);
                // Handle the error, show message, etc.
            }
        };

        fetchUserBusinesses();
    },[]);

    const handleBusinessChange = (e) => {
        setSelectedBusiness(e.target.value);
        if (e.target.value === "New Business") {
            setShowModal(true);
        }
    };

    const handleModalConfirm = () => {
        setShowModal(false);
        navigate('/business/add');
        // Redirect to create add business page logic here
        console.log("Redirecting to add business page");
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };

    const handleSubmit = async () => {
        setShowSpinner(true);

        try {
            const token = localStorage.getItem("token"); // Retrieve the token from local storage
            const response = await axios.post(
                "http://localhost:8080/payment",
                {
                    client: selectedBusiness,
                    description: itemDescription,
                    item: itemName,
                    amount: totalAmount,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 201) {
                setShowSuccessModal(true);
                setTimeout(() => {
                    navigate("/dashboard");
                }, 3000);
            } else {
                setShowFailureModal(true);
            }
        } catch (error) {
            setShowFailureModal(true);
        } finally {
            setShowSpinner(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
                <div className="mb-4">
                    <p className="text-gray-600">Generate QR codes</p>
                    <h2 className="text-xl font-bold">Enter Item Details</h2>
                </div>
                <div>
                    <input
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="text"
                        placeholder="Item(s) - multiple items should be comma seperated"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </div>
                <div>
          <textarea
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              placeholder="Item(s) Description"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
          ></textarea>
                </div>
                <div>
                    <input
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        type="number"
                        placeholder="Total Amount"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                        min={1}
                    />
                </div>
                <div>
                    <select
                        className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                        value={selectedBusiness}
                        onChange={handleBusinessChange}
                    >
                        <option value="">Select Business</option>
                        {businesses.map((business) => (
                            <option key={business.reference} value={business.reference}>
                                {business.name}
                            </option>
                        ))}
                        <option value="New Business">New Business</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                    >
                        {showSpinner ? "Processing..." : "Generate QR Code"}
                    </button>
                </div>
            </div>
            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className="mb-4 text-red-500">
                            Are you sure you want to add a new business?
                        </p>
                        <div className="flex items-center justify-between">
                            <button
                                onClick={handleModalConfirm}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Okay
                            </button>
                            <button
                                onClick={handleModalCancel}
                                className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showSuccessModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className="mb-4 text-green-500">
                            QR Code created successfully. Redirecting to dashboard...
                        </p>
                    </div>
                </div>
            )}
            {showFailureModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className="mb-4 text-red-500">
                            QR Code creation failed. Please try again.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenerateQR;
