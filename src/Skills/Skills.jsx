import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCisco, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center md:text-left">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        
        {/* HTML */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="p-4 bg-zinc-950 rounded-2xl border border-slate-800 group-hover:scale-110 duration-300">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <p className="font-semibold text-sm text-slate-300">HTML5</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="p-4 bg-zinc-950 rounded-2xl border border-slate-800 group-hover:scale-110 duration-300">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <p className="font-semibold text-sm text-slate-300">CSS3</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="p-4 bg-zinc-950 rounded-2xl border border-slate-800 group-hover:scale-110 duration-300">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <p className="font-semibold text-sm text-slate-300">JavaScript</p>
        </div>

        {/* React */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="p-4 bg-zinc-950 rounded-2xl border border-slate-800 group-hover:scale-110 duration-300">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <p className="font-semibold text-sm text-slate-300">React</p>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="p-4 bg-zinc-950 rounded-2xl border border-slate-800 group-hover:scale-110 duration-300">
            <SiTailwindcss color="#38B2AC" size={50} />
          </span>
          <p className="font-semibold text-sm text-slate-300">Tailwind</p>
        </div>

        {/* Cisco */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="p-4 bg-zinc-950 rounded-2xl border border-[#049fd9] group-hover:scale-110 duration-300 shadow-md shadow-[#049fd9]/20">
            <SiCisco color="#049fd9" size={50} />
          </span>
          <p className="font-semibold text-sm text-[#049fd9]">Cisco / Networking</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;