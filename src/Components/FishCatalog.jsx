import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const FishCatalog = ({ fishData }) => {
  const [filter, setFilter] = useState('All'); // State to hold the selected filter
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const location = useLocation();

  // Fish categories and keywords for filtering by name
  const fishCategories = [
    'All',
    'Angelfish & Dwarf Angelfish',
    'Anthias',
    'Basslets & Dottybacks',
    'Blennies & Gobies',
    'Butterfly Fishes',
    'Cardinal Fishes',
    'Damselfishes & Clownfishes',
    'Hawkfishes',
    'Lion and Scorpionfishes',
    'Puffer And Boxfishes',
    'Tangs & Rabbitfishes',
    'Trigger and Filefishes',
    'Wrasses',
    'Miscellaneous Fish' // Category for uncategorized fish
  ];

  // Keyword mappings for fish names
  const categoryKeywords = {
    'Angelfish & Dwarf Angelfish': ['Angelfish'],
    'Anthias': ['Anthias'],
    'Basslets & Dottybacks': ['Basslet', 'Dottyback'],
    'Blennies & Gobies': ['Blenny', 'Goby'],
    'Butterfly Fishes': ['Butterflyfish'],
    'Cardinal Fishes': ['Cardinalfish'],
    'Damselfishes & Clownfishes': ['Damselfish', 'Clownfish'],
    'Hawkfishes': ['Hawkfish'],
    'Lion and Scorpionfishes': ['Lionfish', 'Scorpionfish'],
    'Puffer And Boxfishes': ['Pufferfish', 'Boxfish'],
    'Tangs & Rabbitfishes': ['Tang', 'Rabbitfish'],
    'Trigger and Filefishes': ['Triggerfish', 'Filefish'],
    'Wrasses': ['Wrasse']
  };

  // Restore scroll position from localStorage
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  // Save scroll position before navigating to FishDetails
  const handleLinkClick = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  };

  // Function to determine if a fish belongs to a specific category by checking its name
  const isInCategory = (fishName, category) => {
    const keywords = categoryKeywords[category];
    return keywords?.some(keyword => fishName.toLowerCase().includes(keyword.toLowerCase()));
  };

  // Function to filter fish data based on selected category and search term
  const filteredFishData = fishData.filter(fish => {
    const matchesCategory =
      filter === 'All' ||
      (filter === 'Miscellaneous Fish'
        ? !Object.keys(categoryKeywords).some(category => isInCategory(fish.name, category))
        : isInCategory(fish.name, filter));

    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#EDF2F4]">
      <header className="bg-[#2B2D42] shadow p-4 text-center sticky top-0 z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#EDF2F4]">ReefQR Fish Catalog</h1>
        <p className="text-sm md:text-lg text-[#8D99AE] mt-2">Explore a variety of saltwater fish species</p>
      </header>

      {/* Filter and Search Section */}
      <div className="p-4 text-center md:flex md:justify-center md:items-center md:space-x-4">
        <div className="relative inline-block w-full md:w-auto mb-4 md:mb-0">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)} // Update filter state
            className="block appearance-none w-full bg-[#2B2D42] text-[#EDF2F4] py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-[#8D99AE] focus:text-white transition-colors duration-300 shadow-lg"
          >
            {fishCategories.map((category, index) => (
              <option key={index} value={category} className="text-black">
                {category}
              </option>
            ))}
          </select>
          {/* Down arrow icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EDF2F4]">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.23 7.1L10 11.94l4.77-4.83 1.4 1.42L10 14.76 3.82 8.52z"/></svg>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative inline-block w-full md:w-auto">
          <input
            type="text"
            placeholder="Search fish by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            className="block w-full bg-white text-[#2B2D42] py-2 px-4 rounded-full leading-tight focus:outline-none focus:bg-[#8D99AE] focus:text-white transition-colors duration-300 shadow-lg"
          />
        </div>
      </div>

      {/* Show number of results */}
      <div className="text-center text-lg md:text-xl font-bold text-[#2B2D42] my-4">
        Results ({filteredFishData.length})
      </div>

      <main className="p-4 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredFishData.length === 0 ? (
            <p className="text-[#2B2D42]">No fish found for this category...</p>
          ) : (
            filteredFishData.map((fish, index) => (
              <Link
                to={`/fish/${index}`}
                key={index}
                onClick={handleLinkClick}  // Save scroll position
              >
                <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
                  <img
                    src={fish.image_url || 'https://via.placeholder.com/300'}
                    alt={fish.name}
                    className="w-full h-40 object-cover sm:h-48"
                  />
                  <div className="p-4">
                    <h2 className="text-sm sm:text-md font-bold text-[#2B2D42] text-center">{fish.name}</h2>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default FishCatalog;