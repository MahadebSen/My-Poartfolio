import React from "react";
import About from "./About";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
