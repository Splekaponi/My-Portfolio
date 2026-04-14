import React from "react";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div id="Education" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Education</h1>
      
      <div className="flex flex-col gap-8 items-center">
        
        {/* University Section */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 w-full md:w-3/4 border border-slate-900 rounded-lg p-6 items-start hover:scale-[1.02] duration-300">
          <span className="p-3 bg-zinc-950 rounded-xl hidden md:block">
            <FaGraduationCap size={40} color="#465697" />
          </span>
          <div className="flex-1">
            <h2 className="font-bold text-xl md:text-2xl text-[#465697]">University of the Cordilleras</h2>
            <p className="text-sm md:text-md font-semibold text-slate-300">BS in Information Technology</p>
            <p className="text-[#465697] text-xs font-bold uppercase mt-1">Network and Security Track</p>
            <p className="text-xs text-slate-500 italic mt-1">2023 - Present</p>
            <a href="https://www.uc-bcf.edu.ph/" target="_blank" rel="noopener noreferrer">
              <button className="mt-3 flex items-center gap-2 text-xs bg-[#465697] py-1 px-3 rounded-full hover:opacity-80">
                Visit <FaExternalLinkAlt size={10} />
              </button>
            </a>
          </div>
        </div>

        {/* Senior High School Section */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 w-full md:w-3/4 border border-slate-900 rounded-lg p-6 items-start hover:scale-[1.02] duration-300">
          <span className="p-3 bg-zinc-950 rounded-xl hidden md:block">
            <FaGraduationCap size={40} color="#465697" />
          </span>
          <div className="flex-1">
            <h2 className="font-bold text-xl md:text-2xl text-[#465697]">Moncada National High School</h2>
            <p className="text-sm md:text-md font-semibold text-slate-300">Senior High School</p>
            <p className="text-xs text-slate-500 italic mt-1">Graduated 2022</p>
            <a href="https://www.facebook.com/MoncadaNHS" target="_blank" rel="noopener noreferrer">
              <button className="mt-3 flex items-center gap-2 text-xs bg-[#465697] py-1 px-3 rounded-full hover:opacity-80">
                Visit <FaExternalLinkAlt size={10} />
              </button>
            </a>
          </div>
        </div>

        {/* Junior High School Section */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 w-full md:w-3/4 border border-slate-900 rounded-lg p-6 items-start hover:scale-[1.02] duration-300">
          <span className="p-3 bg-zinc-950 rounded-xl hidden md:block">
            <FaGraduationCap size={40} color="#465697" />
          </span>
          <div className="flex-1">
            <h2 className="font-bold text-xl md:text-2xl text-[#465697]">Pines City National High School</h2>
            <p className="text-sm md:text-md font-semibold text-slate-300">Junior High School</p>
            <p className="text-xs text-slate-500 italic mt-1">Baguio City</p>
            <a href="https://www.facebook.com/profile.php?id=100066830495599" target="_blank" rel="noopener noreferrer">
              <button className="mt-3 flex items-center gap-2 text-xs bg-[#465697] py-1 px-3 rounded-full hover:opacity-80">
                Visit <FaExternalLinkAlt size={10} />
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;