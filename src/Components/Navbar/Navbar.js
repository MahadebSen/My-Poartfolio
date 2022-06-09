import React from "react";
import logo from "../../images/logo-2.png";

const Navbar = () => {
  return (
    <section>
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-16 py-4">
          <div>
            <img width="75px" className="rounded-lg" src={logo} alt="" />
          </div>
          <ul className="flex items-center justify-center gap-5 text-lg font-medium">
            <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
              Home
            </li>
            <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
              About me
            </li>
            <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
              Projects
            </li>
            <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
              Comtact me
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
