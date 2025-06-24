import React from "react";
import Typewriter from "typewriter-effect"
import { Bio } from "../data/constants";
import devPic from "../assets/devPic.png";
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../utils/motion";
import StyledStarCanvas from "./canvas/star";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";


export default function Hero() {
  return (
    <React.Fragment>
  <div
    className="heroContainer bg-gray-900 flex justify-center items-center px-6 md:px-10 py-16 relative text-white"
    // style={{
    //   clipPath: "polygon(0 0, 100% 0%, 100% 100%, 70% 95%, 0 100%)",
    // }}
  >
   <div className="absolute right-0 bottom-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1240px] justify-end flex">
      <StyledStarCanvas />
      <HeroBgAnimation />
    </div>
    <motion.div {...headContainerAnimation}>
      <div className="heroInner flex flex-col md:flex-row justify-between items-center w-full max-w-[1100px] gap-8">
      
      {/* Left Side */}
      <div className="heroLeft w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-4 md:items-start items-center text-center md:text-left">
      <motion.div {...headTextAnimation}>
        <h2 className="font-bold text-3xl md:text-5xl leading-snug">
          Hi, I am <br />
          <span className="">Neha Rani</span>
        </h2>
       

        <div className="font-semibold text-lg inline-flex">
          I am a
          <span className="text-[#5f78f4] pl-2">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </motion.div>
      <motion.div {...headContentAnimation}>
        <p className="text-sm md:text-base leading-relaxed max-w-md text-gray-300">
          An optimistic, curious, and detail-oriented Front-End Developer
          passionate about building beautiful, accessible, and high-performance
          web experiences.
        </p>
        </motion.div>
        <motion.div {...headContentAnimation}>
        <button className="mt-4 bg-[#5f78f4] hover:bg-[#4755d1] text-white px-6 py-3 rounded-full shadow-md transition duration-300">
          Check Resume
        </button>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="heroRight w-full md:w-1/2 order-1 md:order-2 flex justify-end items-end z-10">
      <motion.div {...headContentAnimation}>
      <Tilt>
         <img src={devPic} alt="Neha Rani" className="w-full" />
         </Tilt>
         </motion.div>
      </div>
    </div>
    </motion.div>
    
  </div>
</React.Fragment>

  );
}
