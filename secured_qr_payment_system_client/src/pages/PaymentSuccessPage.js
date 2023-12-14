import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Payment Success</p>
          <h2 className="text-xl font-bold">Thank you for your purchase!</h2>
        </div>
        <p className="text-gray-600">
          Your payment was successful. We appreciate your business.
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccessPage;
