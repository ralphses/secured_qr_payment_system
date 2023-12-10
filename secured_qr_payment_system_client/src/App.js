import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import axios from "axios";
import "./App.css";

const Scanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Use FileReader to read the uploaded file and set it as selectedImage
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);

      try {
        const formData = new FormData();
        formData.append("qr", file);

        const response = await axios.post(
          "http://localhost:8080/image/qr",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Success case - handle the response data accordingly
        console.log("Image upload response:", response.data);

        const link = response.data.data.link;

        if (link) {
          // Check if the URL is secure (starts with https://)
          if (link.startsWith("https://")) {
            // Open the secure URL
            window.open(link, "_blank");
          } else {
            // Display error message if the URL is not secure
            handleErrorMessage("Payment URL not secured");
          }
        }

        handleSuccess();
      } catch (error) {
        if (error.response.status === 400) {
          handleErrorMessage(
            "File not a valid QR code. Try uploading a QR code image file"
          );
          setSelectedImage(null);
          return;
        } else if (error.response.status === 404) {
          handleErrorMessage("QR code not from a trusted/known merchant");
          setSelectedImage(null);
          return;
        } else {
          handleErrorMessage("Error uploading image. Please try again.");
          setSelectedImage(null);
          return;
        }
      }
    }
  };

  const handleScanComplete = async (result) => {
    // Handle the scanned result (e.g., set state, perform actions)
    console.log("Scanned Result:", result);

    // Close the scanner after scanning
    setShowScanner(false);

    if (result) {
      setQrCodeData(result.text);

      // Send QR code data as a GET request using Axios
      await sendQrCodeData(result.text);
    }
  };

  const sendQrCodeData = async (data) => {
    try {
      const response = await axios.get("http://localhost:8080/qr", {
        params: { data },
      });
      // Success case - handle the response data accordingly
      console.log("QR code data send response:", response.data);

      const link = response.data.data.link;

      if (link) {
        // Check if the URL is secure (starts with https://)
        if (link.startsWith("https://")) {
          // Open the secure URL
          window.open(link, "_blank");
        } else {
          // Display error message if the URL is not secure
          handleErrorMessage("Payment URL not secured");
        }
      }

      handleSuccess();
    } catch (error) {
      if (error.response.status === 400) {
        handleErrorMessage(
          "File not a valid QR code. Try uploading a QR code image file"
        );
        setSelectedImage(null);
        return;
      } else if (error.response.status === 404) {
        handleErrorMessage("QR code not from a trusted/known merchant");
        setSelectedImage(null);
        return;
      } else {
        handleErrorMessage("Error uploading image. Please try again.");
        setSelectedImage(null);
        return;
      }
    }
  };

  const handleErrorMessage = (errorMessage) => {
    setError(errorMessage);
    setShowModal(true);

    // Hide the modal after 3000 milliseconds (3 seconds)
    setTimeout(() => {
      setShowModal(false);
      setError(null);
    }, 6000);
  };

  const hideScanner = () => {
    setShowScanner(false);
  };

  const handleSuccess = () => {
    // Handle success logic here

    // Clear input fields and selected image
    setError(null);
    setShowModal(false);
    setQrCodeData(null);
    setSelectedImage(null)
  };

  const handleScanButtonClick = () => {
    setSelectedImage(null);
    setShowScanner(!showScanner);
  };

  return (
    <section className="flex justify-center h-screen items-center bg-white">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4 relative">
        <div className="mb-4 text-center">
          <p className="text-xl font-bold">CBN Approved QR Code Scanner</p>
          <h2 className="text-gray-600">Upload an Image</h2>
        </div>
        <div className="border-dashed border-2 border-gray-200 p-6 mb-4">
          <input
            type="button"
            accept="image/*"
            className="hidden"
            id="qr"
            onClick={handleScanButtonClick}
          />
          <label
            htmlFor="qr"
            className="cursor-pointer text-gray-600 hover:text-blue-600"
          >
            {!showScanner ? "Open Scanner" : "Close Scanner"}
          </label>
        </div>
        <div className="border-dashed border-2 border-gray-200 p-6 mb-4">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageInput"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="imageInput"
            onClick={hideScanner}
            className="cursor-pointer text-gray-600 hover:text-blue-600"
          >
            {selectedImage ? "Change Image" : "Browse for Image"}
          </label>
        </div>
        {selectedImage && (
          <div className="w-full h-auto">
            <img src={selectedImage} alt="Selected" className="w-full h-auto" />
          </div>
        )}
        {showScanner && (
          <div className="w-full h-auto">
            <QrScanner
              onDecode={(result) => handleScanComplete(result)}
              onError={(error) => console.log(error?.message)}
            />
          </div>
        )}
        {showModal && (
          <div className="mb-4">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        {qrCodeData && (
          <div className="mb-4">
            <p className="text-green-500">QR Code Data: {qrCodeData}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Scanner;
