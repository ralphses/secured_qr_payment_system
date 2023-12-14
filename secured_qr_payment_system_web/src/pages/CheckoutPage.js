import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('reference');

    if (!reference) {
      // Redirect to home if 'reference' is not provided in the URL
      window.location.href = '/';
      return;
    }

    const fetchTransactionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/payment/${reference}`);
        setTransactionDetails(response.data);
      } catch (error) {
        console.error('Error fetching transaction details:', error);
        setErrorMessage('Invalid payment');
        setShowModal(true);
      }
    };

    fetchTransactionDetails();
  }, []);

  const handleCheckout = async () => {
    // Your existing checkout logic goes here...
    // For demonstration purposes, we'll just log the transaction details.
    console.log('Transaction Details:', transactionDetails);

    // Simulating the checkout process (replace this with your actual logic)
    // Here, a successful checkout will show a success modal after a delay
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Checkout</p>
          <h2 className="text-xl font-bold">Complete your purchase</h2>
        </div>
        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : transactionDetails ? (
          <>
            <div>
              <p className="text-sm font-semibold">Transaction ID:</p>
              <p className="text-gray-600">{transactionDetails.reference}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Item Name:</p>
              <p className="text-gray-600">{transactionDetails.itemName}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Description:</p>
              <p className="text-gray-600">{transactionDetails.description}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Total Amount:</p>
              <p className="text-gray-600">{transactionDetails.amount}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Date Initiated:</p>
              <p className="text-gray-600">{transactionDetails.createdAt}</p>
            </div>
            <div>
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
              >
                Confirm Purchase
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Loading transaction details...</p>
        )}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="mb-4 text-red-500">{errorMessage}</p>
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

export default CheckoutPage;
