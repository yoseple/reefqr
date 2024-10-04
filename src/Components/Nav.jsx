import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2B2D42] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Name */}
          <div className="flex items-center">
            {/* Link to Home */}
            <Link to="/" className="text-2xl font-bold text-[#EDF2F4] hover:text-[#8D99AE]">
              ReefQR
            </Link>
          </div>

          {/* Right: Links */}
          <div className="hidden md:flex space-x-4">
            {/* <Link
              to="/catalog"
              className="text-[#EDF2F4] hover:text-[#8D99AE] text-lg font-medium"
            >
              Fish Catalog
            </Link> */}

            <Link
              to="/about"
              className="text-[#EDF2F4] hover:text-[#8D99AE] text-lg font-medium"
            >
              About
            </Link>

            <Link
              to="/help"
              className="text-[#EDF2F4] hover:text-[#8D99AE] text-lg font-medium"
            >
              Help
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#EDF2F4] hover:text-[#8D99AE] focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="/catalog"
              className="block text-[#EDF2F4] hover:text-[#8D99AE] text-lg font-medium py-2"
              onClick={toggleMenu}
            >
              Fish Catalog
            </Link>

            <Link
              to="/about"
              className="block text-[#EDF2F4] hover:text-[#8D99AE] text-lg font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </Link>

            <Link
              to="/help"
              className="block text-[#EDF2F4] hover:text-[#8D99AE] text-lg font-medium py-2"
              onClick={toggleMenu}
            >
              Help
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;