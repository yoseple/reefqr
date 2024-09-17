import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-[#EDF2F4] min-h-screen text-[#2B2D42]">
      {/* Banner Section */}
      <header
        className="bg-[#2B2D42] py-16 text-center bg-cover bg-center"
        style={{
            backgroundImage: `url('/path-to-your-image/../../')`,
        }}
        >
        <h1 className="text-5xl font-bold text-[#EDF2F4]">Welcome to ReefQR</h1>
        <p className="text-lg mt-4 text-[#8D99AE]">Discover and explore saltwater fish species.</p>
        <Link
            to="/catalog"
            className="mt-6 inline-block bg-[#8D99AE] text-white font-bold py-2 px-6 rounded-full hover:bg-[#6C757D]"
        >
            View Fish Catalog
        </Link>
    </header>

      {/* Categories Section */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#2B2D42]">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Saltwater Fish */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://fishfixsrilanka.lk/wp-content/uploads/2023/02/740279_568258306535377_165804869_o.jpg" alt="Saltwater Fish" className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#2B2D42]">Saltwater Fish</h3>
              <p className="text-[#8D99AE]">Explore different species of saltwater fish.</p>
              <Link
                to="/catalog"
                className="mt-6 inline-block bg-[#2B2D42] text-white font-bold py-2 px-6 rounded-full hover:bg-[#8D99AE] transition-colors duration-300"
                >
                Explore Saltwater Fish
                </Link>
            </div>
          </div>
          {/* Add more categories as needed */}
        </div>
      </main>
    </div>
  );
};

export default Home;