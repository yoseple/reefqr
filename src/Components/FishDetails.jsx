import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FishDetails = ({ fishData }) => {
  const { id } = useParams();
  const fish = fishData[id];

  if (!fish) {
    return <p>Fish not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Back to Catalog Link */}
      <Link to="/" className="text-blue-600 hover:underline text-lg mb-8 block">
        &larr; Back to Catalog
      </Link>

      {/* Fish Name and Image */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">{fish.name}</h1>
        <div className="relative inline-block">
          <img
            src={fish.image_url || 'https://via.placeholder.com/300'}
            alt={fish.name}
            className="w-full max-w-lg mx-auto h-auto object-contain rounded-lg shadow-lg"
          />
          {/* Overlaying the Name on the Image */}
          {/* <h1 className="absolute inset-x-0 bottom-0 text-white text-4xl font-bold bg-black bg-opacity-50 p-4">
            {fish.name}
          </h1> */}
        </div>
      </div>

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

        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-gray-600">
              <strong>Synonyms:</strong> {fish.overview.Synonyms || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Distribution:</strong> {fish.overview.Distribution || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Maximum Size:</strong> {fish.overview.MaximumSize || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Temperature:</strong> {fish.overview.Temperature || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Water Parameters:</strong> {fish.overview.WaterParameters || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Compatibility:</strong> {fish.overview.Compatibility || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Lighting:</strong> {fish.overview.Lighting || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Reef Aquarium Compatibility:</strong> {fish.overview.ReefAquariumCompatibility || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Sexual Dimorphism:</strong> {fish.overview.SexualDimorphism || 'N/A'}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FishDetails;