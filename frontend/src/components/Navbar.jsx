import React from "react";
import { Link as ScrollLink } from "react-scroll";  // For smooth scrolling
import { Link, useLocation } from "react-router-dom";  // For routing

const Navbar = () => {
  const location = useLocation();  // Get the current route

  // Check if the user is on the homepage
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="TaskDo Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl font-bold text-customBlue">TaskDo</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {/* Conditionally render ScrollLink if on HomePage, otherwise use Link to redirect */}
          <li>
            {isHomePage ? (
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer"
              >
                <strong>Home</strong>
              </ScrollLink>
            ) : (
              <Link
                to="/"
                className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer"
              >
                <strong>Home</strong>
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer"
              >
                <strong>Features</strong>
              </ScrollLink>
            ) : (
              <Link to="/" className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer">
                <strong>Features</strong>
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="FaqSection"
                smooth={true}
                duration={500}
                className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer"
              >
                <strong>FAQ</strong>
              </ScrollLink>
            ) : (
              <Link to="/" className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer">
                <strong>FAQ</strong>
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="AboutUs"
                smooth={true}
                duration={500}
                className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer"
              >
                <strong>About Us</strong>
              </ScrollLink>
            ) : (
              <Link to="/" className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer">
                <strong>About Us</strong>
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer"
              >
                <strong>Contact</strong>
              </ScrollLink>
            ) : (
              <Link to="/" className="text-lg text-gray-700 hover:text-customBlue transition duration-200 cursor-pointer">
                <strong>Contact</strong>
              </Link>
            )}
          </li>
        </ul>

        {/* Sign in and Join Now Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="bg-customBlue text-lg text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Sign in
            </button>
          </Link>
          <Link to="/register">
            <button className="text-customBlue border border-customBlue text-lg py-2 px-4 rounded-full font-semibold bg-white hover:bg-gray-100 transition duration-300">
              Join Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-customBlue">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
