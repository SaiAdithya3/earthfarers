import React from "react";
import { Link } from "react-router-dom";

const GetQuote = () => {
  return (
    <section className="mt-[100px] mb-[100px] py-16 px-6 xl:px-20 text-white">
      <div
        className="max-w-7xl mx-auto bg-black bg-opacity-60 p-2 md:p-10 rounded-[35px] bg-cover bg-center bg-gradient-to-tr from-black to-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), transparent), url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center pt-10 lg:items-end gap-10 ">
          {/* Left Section - Text */}
          <div className="w-full md:w-8/12 flex flex-col justify-end text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl intern font-bold mb-4">
              Partner with Earth Farers EXIM
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Discover our reliable trading solutions and international-quality
              products. Let us help you find the best solutions for your import
              and export needs.
            </p>
            <div className="flex gap-2 lg:justify-start justify-center items-center ">
              <Link
                to="#products"
                className="bg-white bluet py-3 px-6 rounded-2xl font-semibold hover:bg-gray-100 transition w-fit  lg:mx-0"
              >
                About us 
              </Link>
              <Link
                to="#products"
                className="bluex py-3 px-6 rounded-2xl font-semibold text-white transition w-fit lg:mx-0"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white w-full lg:w-4/12 h-full p-6 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-semibold intern bluet mb-2 mt-2">
              Get a Quote
            </h3>
            <p className="mb-4 text-sm text-black">We only send essential and relevant emails—no spam, ever.</p>
            <form className="space-y-6 bluet">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="company"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Company name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="product"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Product name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#064185] focus:ring-[#064185] focus:ring-1"
                  placeholder="Quantity"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bluex text-white font-semibold py-3 rounded-2xl hover:bg-[#064185d9] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
