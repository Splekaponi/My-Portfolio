import React from "react";
import avatarImg from "../../assets/me.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I'm an IT Student at the University of the Cordilleras specializing in Network and Security Track
        </p>
        
       <a href="mailto:johnrhuyp8@gmail.com?subject=Inquiry from Portfolio">
  <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Contact Me
  </button>
</a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="John Rhuy" />
      </div>
    </div>
  );
};

export default Home;