import React from "react";
import ProjectCard from "./ProjectCard";

// Imports
import portfolioImg from "../../assets/portfolio.png";
import sigebiliImg from "../../assets/SigeBili.png";
import iuImg from "../../assets/iu.jpg";
import jennieImg from "../../assets/jennie.jpg";
import hotelImg from "../../assets/Hotel.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        
        {/* 1st: Portfolio */}
        <ProjectCard
          title="Personal Portfolio"
          main="My latest personal portfolio website showcasing my skills in React and Tailwind CSS."
          banner={portfolioImg}
          demoLink="https://splekaponi.github.io/Personal_Portfolio/#home"
          sourceLink="https://github.com/Splekaponi/Personal_Portfolio"
        />

        {/* 2nd: Jennie */}
        <ProjectCard
          title="Jennie Kim"
          main="A fan-styled landing page dedicated to Jennie Kim, focusing on clean UI."
          banner={jennieImg}
          demoLink="https://splekaponi.github.io/Jennie-Kim/"
          sourceLink="https://github.com/Splekaponi/Jennie-Kim"
        />

        {/* 3rd: IU */}
        <ProjectCard
          title="IU (Lee Ji-eun)"
          main="A responsive web project featuring the career and discography of Lee Ji-eun."
          banner={iuImg}
          demoLink="https://splekaponi.github.io/Lee-Ji-eun/"
          sourceLink="https://github.com/Splekaponi/Lee-Ji-eun"
        />

        {/* 4th: SigeBili */}
        <ProjectCard
          title="SigeBiLi"
          main="An e-commerce landing page interface built for a modern shopping experience."
          banner={sigebiliImg}
          demoLink="https://splekaponi.github.io/SigeBiLi/#"
          sourceLink="https://github.com/Splekaponi/SigeBiLi"
        />

        {/* 5th: Hotel */}
        <ProjectCard
          title="Hotel Del Luna"
          main="A specialized web project or repository inspired by the Korean Drama series."
          banner={hotelImg}
          demoLink="https://splekaponi.github.io/Korean-Drama/"
          sourceLink="https://github.com/Splekaponi/Korean-Drama"
        />

      </div>
    </div>
  );
};

export default Projects;