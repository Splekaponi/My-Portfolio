import React from "react";

const ProjectCard = ({ title, main, banner, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img 
        className="p-4 rounded-2xl object-cover h-48 w-full" 
        src={banner} 
        alt={title} 
      />
      
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {main}
      </p>
      
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={demoLink} target="_blank" rel="noreferrer" className="flex-1">
          <button className="w-full text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105">
            Demo
          </button>
        </a>
        
        <a href={sourceLink} target="_blank" rel="noreferrer" className="flex-1">
          <button className="w-full text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105">
            Source
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;