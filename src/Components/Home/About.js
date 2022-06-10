import React from "react";
import me from "../../images/IT'S ME.png";
import "./Home.css";

const About = () => {
  return (
    <section className="my-20 lg:my-[190px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center flex-col lg:flex-row gap-32 lg:gap-1 mx-20 text-left pb-12 ">
          <div className="flex-1 mx-10 md:mx-32 lg:py-10 lg:ml-16 lg:mr-8">
            <p className="text-white text-4xl mb-4 line">About Me </p>
            <p className="font-medium text-[rgb(223,232,255)]">
              Hi, i'm Mahadeb Sen and I enjoy creating things that live on the
              internet. Inspite of being from non-CSE background, due to my
              interest on web development, I started my learning journey at
              "Programming Hero" with "Jhankar Mahbub" sir.
            </p>
            <button className="text-white bg-[#bb005d] text-xl mt-8 px-4 py-3 rounded-lg">
              My Resume
            </button>
          </div>

          <div className="flex-1">
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
