import React, { useEffect, useState } from "react";
import EachSkill from "./EachSkill";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto pt-24 lg:pt-0">
        <p className="text-white text-4xl mb-20">Skills Highlight</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-16 md:mx-24">
          {skills.map((item) => (
            <EachSkill key={item._id} item={item}></EachSkill>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
