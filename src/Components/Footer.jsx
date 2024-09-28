import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2B2D42] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo or Title */}
          <div className="text-[#EDF2F4] mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">ReefQR</h2>
            <p className="text-[#8D99AE]">Explore the beauty of saltwater fish</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-[#EDF2F4] hover:text-[#8D99AE] transition-colors duration-300">
              Home
            </Link>
            <Link to="/catalog" className="text-[#EDF2F4] hover:text-[#8D99AE] transition-colors duration-300">
              Fish Catalog
            </Link>
            <Link to="/about" className="text-[#EDF2F4] hover:text-[#8D99AE] transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-[#EDF2F4] hover:text-[#8D99AE] transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[#8D99AE] pt-4">
          <p className="text-[#8D99AE] text-sm text-center">
            &copy; {new Date().getFullYear()} ReefQR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;