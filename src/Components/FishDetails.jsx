import React, { useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import QRCodeStyling from 'qr-code-styling'; // Import the qr-code-styling library

const FishDetails = ({ fishData }) => {
  const { id } = useParams();
  const location = useLocation(); // Get the location object to access the passed state
  const fish = fishData ? fishData[id] : null;
  const qrCode = useRef(null); // Ref to store the QRCodeStyling instance

  useEffect(() => {
    window.scrollTo(0, 0);

    if (fish && !qrCode.current) {
      // Initialize the QR code with fish name overlay
      qrCode.current = new QRCodeStyling({
        width: 300,
        height: 300,
        data: window.location.href, // The current page URL
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 10,
        },
        dotsOptions: {
          color: "#000",
          type: "rounded",
        },
        backgroundOptions: {
          color: "#ffffff",
        },
        image: "", // You can add an image if desired
      });
    }
  }, [fish]);

  if (!fish) {
    return <p>Fish not found.</p>;
  }

  // Function to handle QR code download as PNG
  const handleDownloadQR = () => {
    if (qrCode.current) {
      // Before downloading, add fish name to QR code as text overlay
      qrCode.current.update({
        image: `data:image/svg+xml;base64,${btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
            <text x="50%" y="90%" font-size="24" fill="black" text-anchor="middle">${fish.name}</text>
          </svg>
        `)}`,
      });
      qrCode.current.download({ name: `${fish.name}-qr`, extension: 'png' });
    }
  };

  // Determine which catalog to navigate back to based on the state
  const catalogType = location.state?.catalog || 'saltwater'; // Default to saltwater if no state is passed

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="sticky top-16 z-20 bg-gray-100 py-4 mb-4">
        <Link
          to={catalogType === 'saltwater' ? '/catalog' : '/fresh-catalog'} // Dynamic navigation based on the catalog type
          className="inline-block bg-[#2B2D42] text-[#EDF2F4] font-bold py-2 px-6 rounded-full hover:bg-[#8D99AE] transition-colors duration-300"
        >
          &larr; Back to {catalogType === 'saltwater' ? 'Saltwater' : 'Freshwater'} Catalog
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">{fish.name}</h1>
        <div className="relative inline-block">
          <img
            src={fish.image_url || 'https://via.placeholder.com/300'}
            alt={fish.name}
            className="w-full max-w-lg mx-auto h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* QR Code Download Section */}
      <div className="text-center mb-8">
        <div className="mt-4">
          <button
            onClick={handleDownloadQR}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Download QR Code with Fish Name
          </button>
        </div>
      </div>

      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-gray-600">
            <strong>Distribution:</strong> {fish.overview?.Distribution || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Maximum Size:</strong> {fish.overview?.MaximumSize || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Temperature:</strong> {fish.overview?.Temperature || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Water Parameters:</strong> {fish.overview?.WaterParameters || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Compatibility:</strong> {fish.overview?.Compatibility || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Lighting:</strong> {fish.overview?.Lighting || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Reef Aquarium Compatibility:</strong> {fish.overview?.ReefAquariumCompatibility || 'N/A'}
          </p>
          <p className="text-gray-600">
            <strong>Sexual Dimorphism:</strong> {fish.overview?.SexualDimorphism || 'N/A'}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">General Information</h2>
          <p className="text-gray-600 mb-4">
            <strong>Care Level:</strong> {fish.care || 'Information not available'}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Feeding:</strong> {fish.feeding || 'Information not available'}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Breeding:</strong> {fish.breeding || 'Information not available'}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FishDetails;