import React from "react";
import banner from "../../images/banner-2.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="my-20 lg:my-28">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-32 lg:gap-2 max-w-7xl mx-auto text-left pb-12 ">
        <div className="flex-1 mx-10 md:mx-32 lg:ml-16 lg:mr-8">
          <p className="font-mono text-xl text-[#bb005d] pt-3">
            Hi, my name is{" "}
          </p>
          <p className="text-6xl font-bold text-white pt-2">Mahadeb Sen</p>
          <p className="text-xl md:text-3xl font-bold text-[hsl(226,41%,79%)] pt-3 flex items-center flex-row gap-2">
            <span>I am a </span>

            <Typewriter
              options={{
                strings: ["Web Developer", "MERN Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="font-medium text-[rgb(223,232,255)] pt-3">
            I really love to create things for the web. That's why inspite of
            being from non-CSE background, I started learning about it. And
            right now I am looking for a job to make it my profession.
          </p>
        </div>
        <div className="flex-1 mx-6 md:mx-2 lg:mr-12">
          <img className="w-[500px] mx-auto" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
