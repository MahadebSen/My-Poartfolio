import React from "react";
import me from "../../images/IT'S ME.png";
import "./Home.css";

const About = () => {
  return (
    <section id="about" className="my-28 lg:my-[190px]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-center items-center flex-col lg:flex-row mx-10 md:mx-28 lg:mx-32 text-left border-4 border-[#021622] rounded-3xl shadow-2xl">
          <div className="flex-1 mx-10 md:mx-12 my-12 lg:ml-16 lg:mr-8">
            <p className="text-white text-4xl mb-4 line">About Me </p>
            <p className="font-medium text-[rgb(223,232,255)]">
              Hi, i'm Mahadeb Sen and I enjoy creating things that live on the
              internet. Inspite of being from non-CSE background, due to my
              interest on web development, I started my learning journey at
              "Programming Hero" with "Jhankar Mahbub" sir.
            </p>
            <a
              href="https://drive.google.com/file/d/184_ymrC3YyqNvnJkz4lIdga79Rj_Ke_4/view?usp=sharing"
              target="blank"
            >
              <button className="text-white bg-[#bb005d] text-xl mt-8 px-4 py-3 rounded-lg">
                My Resume
              </button>
            </a>
          </div>

          <div className="flex-1 mt-3 mb-10 md:mt-3 md:mb-20 lg:my-20 lg:ml-8 lg:mr-16 xl:mr-8">
            <div className="box mx-auto">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
