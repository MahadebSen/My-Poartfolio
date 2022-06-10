import React from "react";

const EachSkill = ({ item }) => {
  const { name, img } = item;
  return (
    <div className="p-5">
      <div className="rounded-xl py-8 bg-[#021622] transition ease-in-out delay-70 hover:-translate-1 hover:scale-110 duration-300 hover:shadow-lg">
        <img className="mx-auto w-[120px]" src={img} alt="" />
        <p className="text-white text-xl pt-3">{name}</p>
      </div>
    </div>
  );
};

export default EachSkill;
