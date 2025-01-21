import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Logo and Menu */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-600 flex">
            simplu <img src='/logo-portocaliu.png' alt='logo' style={{width:'30px'}}/>
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            Despre
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <button className="text-gray-700 hover:text-blue-600">
              Soluții
            </button>
            <div
              className={`absolute bg-white shadow-lg mt-2 w-48 rounded transition-all duration-300 ${
                dropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/solutions/dental"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Clinici Dentare
              </Link>
              <Link
                to="/solutions/salons"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Saloane
              </Link>
              <Link
                to="/solutions/gyms"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Săli de Fitness
              </Link>
              <Link
                to="/solutions/hotels"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Hoteluri
              </Link>
            </div>
          </div>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
            Prețuri
          </Link>
        </div>

        {/* Right Side: Login and Get Started */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Intră în cont
          </Link>
          <Link
            to="/get-started"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Încearcă Acum
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Despre
          </Link>
          <div className="border-t border-gray-200"></div>
          <div className="px-4 py-2 text-gray-700">Soluții:</div>
          <Link
            to="/solutions/dental"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Clinici Dentare
          </Link>
          <Link
            to="/solutions/salons"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Saloane
          </Link>
          <Link
            to="/solutions/gyms"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Săli de Fitness
          </Link>
          <Link
            to="/solutions/hotels"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Hoteluri
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Prețuri
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Intră în cont
          </Link>
          <Link
            to="/get-started"
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            onClick={toggleMobileMenu}
          >
            Încearcă Acum
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;