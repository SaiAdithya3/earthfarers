import React from "react";
import svg from "../assets/earthfarers.svg";
import blue from "../assets/blue.png";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center py-12 px-6 ">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Left section with logo and brand name */}
          <div className="flex items-center gap-4 mb-8 lg:mb-0">
            <img src={blue} alt="blue" className="w-32 md:w-48" />
            <div className="text-4xl md:text-6xl bluet">
              <h1 className="uppercase font-bold">EARTH</h1>
              <h1 className="uppercase font-bold">FARERS</h1>
              <h1 className="uppercase font-bold">EXIM</h1>
            </div>
          </div>

          {/* Right section with links */}
          <div className="flex flex-col lg:flex-row gap-6 text-gray-600">
            <div className="flex flex-col text-2xl uppercase font-semibold">
            {/* <h1 className="uppercase font-bold">Quick </h1> */}
              <a href="/about" className="text-end mb-2 hover:underline hover:bluet transition-all">About Us</a>
              <a href="/services" className="mb-2 text-end hover:underline hover:bluet transition-all">Services</a>
              <a href="/contact" className="mb-2 hover:bluet hover:underline text-end transition-all">Contact</a>
              <a href="/privacy-policy" className="mb-2 hover:bluet hover:underline text-end transition-all">Privacy Policy</a>
            </div>
            {/* <div className="flex flex-col">
              <a href="mailto:contact@earthfarers.com" className="mb-2 hover:text-blue-600 transition-all">Email: contact@earthfarers.com</a>
              <a href="tel:+1234567890" className="mb-2 hover:text-blue-600 transition-all">Phone: +1234567890</a>
            </div> */}
          </div>
        </div>

        <hr className="my-6 w-11/12 border-gray-300" />

        {/* Bottom section with rights reserved */}
        <div className="max-w-7xl text-center flex items-center justify-between w-full text-sm text-gray-600">
          <p className="text-start">&copy; {new Date().getFullYear()} Earth Farers EXIM.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
