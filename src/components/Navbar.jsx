import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/blue.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 2.5, duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <>
      <div className="absolute overflow-hidden top-0 left-0 z-[800] w-full flex items-center  justify-between p-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 1.5, ease: "easeOut" }}
          className="flex overflow-hidden items-center space-x-3"
        >
          <Link to="/" className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
        </motion.div>

        {/* Middle Static Text */}

        {/* Right Navbar Links */}
        <motion.div
          className="flex overflow-hidden space-x-8 text-lg font-medium text-white  "
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
        >
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
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
