import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/blue.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To track if the menu is open

  const navItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 1.2, ease: "easeOut" },
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
  };

  return (
    <>
      <div className="absolute overflow-hidden top-0 left-0 z-[800] w-full flex items-center justify-between p-6 lg:p-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 1.5, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <Link to="/" className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
        </motion.div>

        {/* Right Navbar Links */}
        <div className="hidden lg:flex space-x-8 text-lg font-medium text-white">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="#services" className="hover:text-gray-400">
            Products
          </Link>
          <Link to="#contact" className="hover:text-gray-400">
            Blog
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <div className="w-8 h-8 flex flex-col justify-around items-center space-y-1 cursor-pointer">
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`bg-white  text-black w-3/4 h-full p-6 transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col mt-16 space-y-6 text-2xl">
            <Link
              to="/"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="#services"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="#contact"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
