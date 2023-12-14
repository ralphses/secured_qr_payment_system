import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [section, setSection] = useState(1);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const navigate = useNavigate();

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
        console.log(reference);
        const response = await axios.get(`http://localhost:8080/payment/get/${reference}`);
        
        console.log(response.data);
        setTransactionDetails(response.data.data.payment);
      } catch (error) {
        console.error('Error fetching transaction details:', error);
        setErrorMessage('Invalid payment');
        setShowModal(true);
      }
    };

    fetchTransactionDetails();
  }, []);

  const handleConfirmPurchase = () => {
    setSection(2);
  };

  const handleProceedToCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/payment/confirm', {
        customerPhone,
        customerEmail,
        customerName,
        reference: transactionDetails.reference,
      });

      // Your additional logic on successful confirmation goes here...
      console.log('Confirmation Response:', response.data);
      window.location.href = response.data.data.link;

      // Simulating the checkout process (replace this with your actual logic)
      // Here, a successful checkout will show a success modal after a delay
      setShowModal(true);
      setErrorMessage('Redirecting...');
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      navigate('/payment/success');
      console.error('Error confirming payment:', error);
      // setErrorMessage('Error confirming payment');
      // setShowModal(true);
    }
  };

  const handleCancel = () => {
    setShowCancelConfirmation(true);
  };

  const handleCancelConfirmation = () => {
    setShowCancelConfirmation(false);
    // Redirect to home if the user cancels the payment
    window.location.href = '/';
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      {section === 1 && (
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">Purchase Details</p>
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
              <div className="flex space-x-4">
                <button
                  onClick={handleCancel}
                  className="flex-grow py-4 bg-red-600 hover:bg-red-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPurchase}
                  className="flex-grow py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                >
                  Confirm Purchase
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Loading transaction details...</p>
          )}
        </div>
      )}

      {section === 2 && (
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600">Customer Information</p>
            <h2 className="text-xl font-bold">Provide your details</h2>
          </div>
          <div>
            <label className="text-sm font-semibold block">Customer Name:</label>
            <input
              type="text"
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-semibold block">Customer Email:</label>
            <input
              type="email"
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-semibold block">Customer Phone:</label>
            <input
              type="tel"
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setSection(1)}
              className="flex-grow py-4 bg-red-600 hover:bg-red-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleProceedToCheckout}
              className="flex-grow py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

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

      {showCancelConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="mb-4">Are you sure you want to cancel the payment?</p>
            <div className="flex space-x-4">
              <button
                onClick={handleCancelConfirmation}
                className="flex-grow py-4 bg-red-600 hover:bg-red-700 rounded text-sm font-bold text-gray-50 transition duration-200"
              >
                Yes, cancel
              </button>
              <button
                onClick={() => setShowCancelConfirmation(false)}
                className="flex-grow py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
              >
                No, continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckoutPage;
