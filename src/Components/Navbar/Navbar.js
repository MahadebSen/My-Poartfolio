import React from "react";
import {} from "react-router-dom";
import logo from "../../images/logo-2.png";

const Navbar = () => {
  return (
    <section className="sticky z-50 top-0 bg-[rgb(6,30,45)]">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-16 py-4">
          <div>
            <img width="60px" className="rounded-lg" src={logo} alt="" />
          </div>
          <ul className="flex items-center justify-center gap-5 text-lg">
            <a href="home">
              <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
                Home
              </li>
            </a>
            <a href="home#about">
              <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
                About me
              </li>
            </a>
            <a href="home#projects">
              <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
                Projects
              </li>
            </a>
            <a href="home#contactme">
              <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
                Comtact me
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
