import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">AboutMe</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                   I’m a developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                    who genuinely enjoys the process of turning a blank 
      screen into a functional website. I love the challenge of building 
      clean, responsive interfaces from the ground up. I believe that clean code and good design go hand-in-hand to solve real-world problems.
                </p>
              </span>
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
