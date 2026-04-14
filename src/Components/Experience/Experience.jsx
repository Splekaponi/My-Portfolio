import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Experience</h1>
      
      <div className="flex flex-col gap-8 items-center">
        
        {/* Education / UC Experience */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 w-full md:w-3/4 border border-slate-900 rounded-lg p-6 items-center hover:bg-opacity-60 duration-300">
          <div className="text-white">
            <h2 className="font-bold text-xl md:text-2xl text-[#465697]">University of the Cordilleras</h2>
            <p className="text-sm md:text-md font-semibold text-slate-300">BS in Information Technology</p>
            <p className="text-xs md:text-sm text-slate-400 italic">2023 - Present</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-200 space-y-2">
              <li>
                Specializing in <span className="text-[#465697] font-bold">Network and Security Track</span>.
              </li>
              <li>
                Trained in <span className="text-[#465697] font-bold">Cisco Networking</span>, Routing and Switching, and Network Security.
              </li>
              <li>
                Collaborating on technical projects involving <span className="text-[#465697] font-bold">Network Configuration</span> and Troubleshooting.
              </li>
            </ul>
          </div>
        </div>

        {/* Web Development Projects */}
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 w-full md:w-3/4 border border-slate-900 rounded-lg p-6 items-center hover:bg-opacity-60 duration-300">
          <div className="text-white">
            <h2 className="font-bold text-xl md:text-2xl text-[#465697]">Web Development Projects</h2>
            <p className="text-sm md:text-md font-semibold text-slate-300">Frontend Developer (Personal Projects)</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-200 space-y-2">
              <li>
                Built and deployed a personal portfolio using <span className="text-[#465697] font-bold">React</span> and <span className="text-[#465697] font-bold">Tailwind CSS</span>.
              </li>
              <li>
                Designed and developed the <span className="text-[#465697] font-bold">SigeBiLi</span> e-commerce landing page.
              </li>
              <li>
                Created various artist and media tribute pages including <span className="text-[#465697] font-bold">Jennie Kim</span>, <span className="text-[#465697] font-bold">IU</span>, and <span className="text-[#465697] font-bold">Hotel Del Luna</span>.
              </li>
              <li>
                Experienced in hosting web applications via <span className="text-[#465697] font-bold">GitHub Pages</span>.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;