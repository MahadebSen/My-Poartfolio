import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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

            <div className="mt-8">
              <a href="https://github.com/MahadebSen" target="blank">
                <FontAwesomeIcon
                  className="ml-1 mr-3 text-4xl text-white hover:text-[#b6c5f3] transition ease-in-out delay-40 hover:-translate-1 hover:scale-125 duration-200 hover:shadow-lg"
                  icon={faGithub}
                />
              </a>
              <a
                href="https://www.instagram.com/mahadeb186/?hl=en"
                target="blank"
              >
                <FontAwesomeIcon
                  className="mx-3 text-4xl text-white hover:text-[#b6c5f3] transition ease-in-out delay-40 hover:-translate-1 hover:scale-125 duration-200 hover:shadow-lg"
                  icon={faInstagram}
                />
              </a>
              <a href="https://www.linkedin.com/in/mahadebsen/" target="blank">
                <FontAwesomeIcon
                  className="mx-3 text-4xl text-white hover:text-[#b6c5f3] transition ease-in-out delay-40 hover:-translate-1 hover:scale-125 duration-200 hover:shadow-lg"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>

          <div className="flex-1 mt-3 mb-[45px] md:mt-3 md:mb-20 lg:my-20 lg:ml-20 lg:mr-10 xl:ml-32 xl:mr-8">
            <div className="box ">
              <img className="rounded-lg" src={me} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
