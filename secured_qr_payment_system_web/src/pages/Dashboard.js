import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQRData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

        const response = await axios.get(
          "http://localhost:8080/payment",
          config
        );

        if (response.status === 200 && response.data.data.codes.length > 0) {
          setCodes(response.data.data.codes);
        } else {
          setCodes([]);
        }
      } catch (error) {
        console.error("Error fetching QR codes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQRData();
  }, []);

  const handleCreateQR = () => {
    navigate("/qr/create");
  };

  const handleDownloadQR = async (reference, link) => {
    try {
      const response = await fetch(link);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `QR_Code_${reference}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Checkout URL copied to clipboard");
        alert("Checkout URL copied to clipboard");
      },
      (err) => {
        console.error("Error copying to clipboard", err);
        alert("Error copying to clipboard");
      }
    );
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center">
      <main className="w-full max-w-5xl p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          QR Codes Generated
        </h1>
        <div className="mb-4">
          <button
            onClick={handleCreateQR}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          >
            Create New QR Code
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-white shadow-md rounded my-6">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">S/N</th>
                  <th className="py-3 px-6 text-left">QR Code Image</th>
                  <th className="py-3 px-6 text-left">Item Name</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-left">Date Created</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 font-light">
                {codes.map((qrCode, index) => (
                  <tr key={qrCode.reference}>
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">
                      <img
                        src={qrCode.link}
                        alt="QR Code"
                        className="w-12 h-12"
                      />
                    </td>
                    <td className="py-4 px-6">{qrCode.itemName}</td>
                    <td className="py-4 px-6">{qrCode.amount}</td>
                    <td className="py-4 px-6">{qrCode.createdAt}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDownloadQR(qrCode.reference, qrCode.link)}
                        className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => handleCopyToClipboard(qrCode.checkout)}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Copy URL
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {codes.length === 0 && (
              <div className="flex flex-col items-center justify-center mt-8">
                <p className="text-lg text-gray-600 mb-4">No QR code available</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
