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
    <section id="projects" className="mx-10 md:mx-32 lg:mx-16 xl:mx-36">
      <div className="max-w-7xl mx-auto my-40 ">
        <p className="text-white text-4xl">My Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-16 mx-10">
          {projects.map((project) => (
            <EachProject key={project._id} project={project}></EachProject>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
