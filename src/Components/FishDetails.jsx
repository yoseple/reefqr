import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

const FishDetails = ({ fishData }) => {
  // Always call hooks at the top level
  const { id } = useParams();

  // Ensure fishData is present and valid
  const fish = fishData ? fishData[id] : null;

  // Call useEffect even if fish is not found, to maintain hook order
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If fish is not found, return early
  if (!fish) {
    return <p>Fish not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Sticky Back to Catalog Link */}
      <div className="sticky top-16 z-20 bg-gray-100 py-4 mb-4">
        <Link
          to="/catalog"
          className="inline-block bg-[#2B2D42] text-[#EDF2F4] font-bold py-2 px-6 rounded-full hover:bg-[#8D99AE] transition-colors duration-300"
        >
          &larr; Back to Catalog
        </Link>
      </div>

      {/* Fish Name and Image */}
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

      {/* Overview Section */}
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

      {/* Details Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Care, Feeding, and Breeding */}
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
      <Footer/>
    </div>
  );
};

export default FishDetails;