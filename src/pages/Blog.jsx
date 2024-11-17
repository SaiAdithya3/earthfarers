import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const links = [
  "https://www.youtube.com/embed/k1Km1CDo-kc?si=obQqQuz5Kf3Z4DaM",
  "https://www.youtube.com/embed/hkbc-lJPi-A?si=NEe3Hs1ykALgXRgo",
  "https://www.youtube.com/embed/WlG7u35of5c?si=ykECMRVOilW2IDzQ",
  "https://www.youtube.com/embed/bNEgLBllE9o?si=wltiz9O8AUjCTVEf",
  "https://www.youtube.com/embed/x3b-nUjkrA4?si=lmXSdiuFyoaHDYPi",
  // "https://youtu.be/x3b-nUjkrA4?si=EUHJKLQI26JXC9-j",
];

const Blog = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div
        className=" bg-black/10 transform h-[50vh] w-full flex items-center justify-center text-9xl font-bold text-center text-white pointer-events-none select-none  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/28185416/pexels-photo-28185416/free-photo-of-a-large-container-yard-with-many-containers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-8/12 text-6xl md:text-7xl text-center intern font-bold"
        >
          Blog
        </motion.h1>
      </div>

      <div className="w-full flex flex-col mt-[100px] mb-[100px] items-center justify-center">
        <div className="max-w-7xl w-full mt-10">
          <h1 className="text-3xl md:text-5xl font-bold intern text-center mb-3">Latest Blogs</h1>
          <p className="text-lg md:text-2xl intern text-center mb-14">
            Here are some of our latest blogs. Stay tuned for more!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-4">
            {links.map((link, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <iframe
                  className="w-full h-96 rounded-3xl"
                  src={link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
