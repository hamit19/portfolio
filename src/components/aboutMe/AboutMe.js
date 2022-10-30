import React from "react";
import { FaReacteurope } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const AboutMe = () => {
  const cardsItem = [
    {
      key: 1,
      title: "React Js",
      icon: <FaReacteurope size={34} />,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
      dolor aut dolores  dolores!`,
    },
    {
      key: 2,
      title: "Next Js",
      icon: <TbBrandNextjs size={34} />,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
      dolores!`,
    },
    {
      key: 3,
      title: "Git",
      icon: "",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
      dolores!`,
    },
    {
      key: 4,
      title: "Github",
      icon: "",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit
      dolores!`,
    },
  ];

  const renderCards = () => {
    return cardsItem.map((item) => (
      <div
        key={item.key}
        className="w-full h-48 bg-slate-800 rounded-md shadow-2xl p-4 "
      >
        <div className="text-gray-50 flex items-center gap-4">
          <div>{item.icon}</div>
          <h3 className="font-medium text-md ">{item.title}</h3>
        </div>
        <div className="text-gray-50 py-4">
          <p>{item.content}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full py-32 px-4 pt-4 pb-20 bg-slate-900 custom-bg-clip ">
      <div className="grid lg:grid-cols-2">
        <div className="text-gray-50 md:text-center lg:text-left md:flex md:flex-col md:justify-center lg:pl-10 lg:pb-10  ">
          <h1 className="text-xl font-medium lg:px-4 ">About Me</h1>
          <p className="w-full md:w-3/4 p-4  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            odit dolor aut dolores quas modi suscipit consequuntur, eos minus.
            Quidem vel sit nihil ratione, beatae voluptas possimus eveniet
            numquam dolores!
          </p>
          <button className="primary-btn w-28 ml-4 mt-0 ">Hire Me</button>
        </div>
        <div className="grid p-4 pb-10 gap-4 md:grid-cols-2 ">
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
