import React from 'react';
import { Link } from 'react-router-dom';

const FishCatalog = ({ fishData }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 text-center sticky top-0 z-10">
        <h1 className="text-4xl font-bold text-gray-800">ReefQR Fish Catalog</h1>
        <p className="text-lg text-gray-600 mt-2">Explore a variety of fish species</p>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fishData.length === 0 ? (
            <p>Loading fish data...</p>
          ) : (
            fishData.map((fish, index) => (
              <Link to={`/fish/${index}`} key={index}>
                <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
                  <img
                    src={fish.image_url || 'https://via.placeholder.com/300'}
                    alt={fish.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">{fish.name}</h2>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default FishCatalog;