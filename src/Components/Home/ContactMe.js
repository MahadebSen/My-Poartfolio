import React from "react";
import contact from "../../images/contact.png";

const ContactMe = () => {
  return (
    <section
      id="contactme"
      class="text-gray-600 body-font text-left pt-[40px] mx-10 md:mx-32 lg:mx-16 xl:mx-36"
    >
      <p className="text-white text-4xl text-center">Contact Me</p>
      <div class="container px-0 md:px-5 py-16 max-w-7xl mx-auto flex justify-center items-center flex-col lg:flex-row gap-16 lg:gap-28">
        <div className="flex-1">
          <img width="480px" className="mx-auto" src={contact} alt="" />
        </div>
        <form class="flex flex-1 flex-col md:ml-auto w-full p-8 md:p-10 border-[3px] border-[#021622] rounded-3xl shadow-2xl">
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="mx-auto">
            <button className="text-white bg-[#bb005d] text-lg mt-4 px-5 py-3 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
