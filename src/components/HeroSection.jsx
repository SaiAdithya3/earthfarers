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
      <div className="absolute top-1/2 left-1/2 transform z-[900]  -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-center    text-white     pointer-events-none select-none">
        <img className="    invert   " src={svg} alt="" />
      </div>
      <div className="w-full relative overflow-hidden z-[800] flex items-center justify-center">
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
