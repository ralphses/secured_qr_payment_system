import React, { useState, useRef } from 'react';

const Scanner = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const previewContainerRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Set the selected image for preview
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            // Set the selected image for preview
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        // Add your logic for handling the submitted image (e.g., upload to server)
        console.log('Image submitted:', selectedImage);
    };

    return (
        <section className="flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded p-6 space-y-4 relative">
                <div className="mb-4">
                    <p className="text-gray-600">Image Upload</p>
                    <h2 className="text-xl font-bold">Upload an Image</h2>
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
                        className="cursor-pointer text-gray-600 hover:text-blue-600"
                    >
                        {selectedImage ? 'Change Image' : 'Browse for Image'}
                    </label>
                </div>
                <div>
                    <div
                        className="border-dashed border-2 border-gray-200 p-6 mb-4"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <p className="text-gray-600">Drag and drop image here</p>
                    </div>
                </div>
                {selectedImage && (
                    <div className="w-full h-auto">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full h-auto"
                        />
                    </div>
                )}
                <div>
                    <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                    >
                        Submit
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Scanner;
