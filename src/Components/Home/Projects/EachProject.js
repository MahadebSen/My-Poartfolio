import React from "react";

const EachProject = ({ project }) => {
  const { name, img, desc } = project;
  return (
    <div>
      <div className="border-[3px] border-[#021622] rounded-xl text-left xl-p-2 transition ease-in-out delay-70 hover:-translate-1 hover:scale-110 duration-300 hover:shadow-lg">
        <div className="mx-auto p-4">
          <img className="mx-auto rounded-lg" src={img} alt="" />
        </div>
        <div className="mx-4 mb-6">
          <p className="text-white font-medium text-3xl mb-2">{name}</p>
          <p className="text-white mb-2">{desc}</p>
          <div className="flex flex-row gap-3 justify-center items-center">
            <button className="text-white bg-[#bb005d] text-lg mt-4 px-4 py-2 rounded-lg">
              Live-site
            </button>
            <button className="text-white bg-[#bb005d] text-lg mt-4 px-4 py-2 rounded-lg">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
