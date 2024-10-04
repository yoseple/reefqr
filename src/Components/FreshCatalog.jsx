import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useSearchParams } from 'react-router-dom';

const FreshCatalog = ({ fishData }) => {
  const [filter, setFilter] = useState('All'); // State to hold the selected filter
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  // Freshwater fish categories and keywords for filtering by name
  const fishCategories = [
    'All',
    'Barbs',
    'Danios',
    'Loaches',
    'Catfish',
    'Cichlids',
    'Fancy Goldfish',
    'Gouramis & Labyrinths',
    'Killifish',
    'Livebearers',
    'Oddballs',
    'Pond Fish',
    'Rainbowfishes',
    'Tetras',
    'Miscellaneous Fish' // Category for uncategorized fish
  ];

  // Keyword mappings for freshwater fish names
  const categoryKeywords = {
    'Barbs': ['Barb'],
    'Danios': ['Danio'],
    'Loaches': ['Loach'],
    'Catfish': ['Catfish'],
    'Cichlids': ['Cichlid'],
    'Fancy Goldfish': ['Goldfish'],
    'Gouramis & Labyrinths': ['Gourami', 'Labyrinth'],
    'Killifish': ['Killifish'],
    'Livebearers': ['Livebearer'],
    'Oddballs': ['Oddball'],
    'Pond Fish': ['Pond'],
    'Rainbowfishes': ['Rainbowfish'],
    'Tetras': ['Tetra'],
  };

  useEffect(() => {
    // Retrieve filter and search term from query parameters when the component loads
    const filterParam = searchParams.get('filter') || 'All';
    const searchParam = searchParams.get('searchTerm') || '';

    setFilter(filterParam);
    setSearchTerm(searchParam);
  }, [searchParams]);

  const handleLinkClick = (fishId) => {
    // Save the current filter and search term in the URL
    const queryParams = new URLSearchParams({ filter, searchTerm }).toString();
    navigate(`/fresh-fish/${fishId}?${queryParams}`);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    // Update the URL with the new filter and current search term
    setSearchParams({ filter: selectedFilter, searchTerm });
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    // Update the URL with the current filter and new search term
    setSearchParams({ filter, searchTerm: searchValue });
  };

  // Restore scroll position from localStorage when coming back
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

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
        <h1 className="text-3xl md:text-4xl font-bold text-[#EDF2F4]">ReefQR Freshwater Fish Catalog</h1>
        <p className="text-sm md:text-lg text-[#8D99AE] mt-2">Explore a variety of freshwater fish species</p>
      </header>

      {/* Filter and Search Section */}
      <div className="p-4 text-center md:flex md:justify-center md:items-center md:space-x-4">
        <div className="relative inline-block w-full md:w-auto mb-4 md:mb-0">
          <select
            value={filter}
            onChange={handleFilterChange} // Update filter state and query params
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
            onChange={handleSearchChange} // Update search term and query params
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
            filteredFishData.map((fish) => (
              <Link
                to={`/fresh-fish/${fish.id}`}  // Use a unique id instead of index
                key={fish.id}
                onClick={() => {
                  localStorage.setItem('scrollPosition', window.scrollY); // Save scroll position
                  handleLinkClick(fish.id); // Navigate with filter and search in query params
                }}
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
      <Footer />
    </div>
  );
};

export default FreshCatalog;