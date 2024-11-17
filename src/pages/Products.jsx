import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetQuote from "../components/GetQuote";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import plasticsheets from "../assets/plasticsheets.jpg";

const categories = [
  {
    // icon: <FaAppleAlt className="text-green-600 text-4xl mb-4" />,
    imageUrl:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    title: "Fruits",
    description: "Banana, Pomegranates, Pineapple, Mango, Jackfruit",
    link: "/fruits",
  },
  {
    // icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
    imageUrl:
      "https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Vegetables",
    description: "Fresh Garlic, Onion",
    link: "/vegetables",
  },
  {
    // icon: <FaSeedling className="text-green-600 text-4xl mb-4" />,
    imageUrl:
      "https://images.pexels.com/photos/7956503/pexels-photo-7956503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Powder Form",
    description:
      "Garlic powder, Banana powder, Guar gum powder, Jackfruit powder",
    link: "/powder-form",
  },
  {
    // icon: <FaCoffee className="text-green-600 text-4xl mb-4" />,
    imageUrl:
      "https://t4.ftcdn.net/jpg/09/11/95/53/360_F_911955321_CXUGBnRFF6oBY3YHldxk5uiT7NAZc5nI.jpg",
    title: "Tea",
    description: "High-quality tea from trusted suppliers",
    link: "/tea",
  },
  {
    // icon: <FaTshirt className="text-green-600 text-4xl mb-4" />,
    imageUrl:
      "https://images.pexels.com/photos/13276484/pexels-photo-13276484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Raw Cotton & Cotton Waste",
    description: "Top-grade cotton for various uses",
    link: "/cotton",
  },
  {
    // icon: <FaBoxOpen className="text-green-600 text-4xl mb-4" />,
    imageUrl: plasticsheets,
    title: "Plastic Products",
    description: "Plastic films, raw materials, optical fibers",
    link: "/plastic-products",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {/* Hero Section */}
      <div
        className=" bg-black/10 transform h-[50vh] w-full flex items-center justify-center text-9xl font-bold text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/28185416/pexels-photo-28185416/free-photo-of-a-large-container-yard-with-many-containers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-8/12 intern text-5xl md:text-7xl text-center font-bold"
        >
          Our Products
        </motion.h1>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mt-[100px] mb-[50px] flex flex-col md:flex-row items-center justify-between gap-14 px-6 py-12 text-center">
        <div className="w-full md:w-2/3 flex flex-col items-start gap-2">
          <h2 className="text-3xl intern font-bold mb-4">
            Explore Our Product Range
          </h2>
          <p className="text-start text-lg text-gray-600 mb-6">
            We provide a diverse selection of high-quality products to meet your
            needs. From fresh produce to raw materials, discover what makes us a
            trusted partner.
          </p>
        </div>
        <button className=" px-6 py-3 bluex text-white group shadow hover:shadow-xl transition-shadow rounded-xl flex items-center gap-2">
          <MdOutlineFileDownload className="text-2xl" />
          Download PDF
        </button>
      </div>

      {/* Product Cards Section */}
      <div className="max-w-7xl px-6 w-full flex flex-wrap gap-10 mb-[100px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className=" w-full md:w-[45%] lg:w-[48%] flex border border-black/10  rounded-3xl cursor-pointer hover:bg-zinc-400/10 transition-all overflow-hidden transform h"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-0 bg-gradient-to-t from-black/70 to-transparent w-full h-full left-0 px-6 flex flex-col justify-end items-start gap-3">
              <h3 className="text-4xl intern text-white font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-gray-200 mb-4">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <GetQuote />
      <Footer />
    </div>
  );
};

export default Products;
