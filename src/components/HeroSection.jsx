import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Hi from "../assets/Hi.mp4";
import svg from "../assets/earthfarers.svg";

const HeroSection = () => {
  const variants = {
    initial: {
      y: "100vh", // Start below the screen
      opacity: 0,
      clipPath: "ellipse(16% 45% at 50% 50%)", // Narrow, tall oval shape at the start
    },
    rise: {
      y: "0vh", // Move to center of the screen
      opacity: 1,
      clipPath: "ellipse(10% 30% at 50% 50%)",
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
    reveal: {
      clipPath: "ellipse(100% 100% at 50% 50%)",
      transition: {
        duration: 5,
        delay: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="absolute bg-black/10 top-0 left-0 transform z-[400] h-full w-full flex items-center justify-center text-9xl font-bold text-center    text-white     pointer-events-none select-none">
        <img className="md:flex hidden invert " src={svg} alt="" />
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="w-8/12 flex md:hidden text-6xl md:text-8xl int text-center font-semibold"
        >
          EARTH FARERS EXIM
        </motion.h1>
      </div>
      <div className="w-full relative overflow-hidden z-[300] flex items-center justify-center">
        {/* Navbar */}
        <Navbar />
        {/* Animated Video Reveal */}
        <motion.div
          className="image-container overflow-hidden z-[-10]"
          initial="initial"
          animate={["rise", "reveal"]}
          variants={variants}
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            className="overflow-hidden z-[-10]"
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src={Hi} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
