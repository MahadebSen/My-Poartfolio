import React, { useEffect, useState } from "react";
import EachProject from "./EachProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="mx-12 md:mx-20 lg:mx-16 xl:mx-40">
      <div className="max-w-7xl mx-auto my-40 ">
        <p className="text-white text-4xl">My Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 md:mx-4">
          {projects.map((project) => (
            <EachProject key={project._id} project={project}></EachProject>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
