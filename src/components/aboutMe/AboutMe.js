import React from "react";
import { BsTools } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { SiCodingninjas } from "react-icons/si";
import { GiProgression } from "react-icons/gi";

const AboutMe = ({ setOpen }) => {
  const cardsItem = [
    {
      key: 1,
      title: "Problem Solving",
      icon: <BsTools size={28} />,
      content: `I attempt to solve problems or bugs. it is a fun challenge for me the solving problems or bugs.`,
    },
    {
      key: 2,
      title: "Teamwork",
      icon: <RiTeamLine size={34} />,
      content: `Teamwork is very important in our field, and I will be able to work in a good team.`,
    },
    {
      key: 3,
      title: "Hard Working and Responsibility",
      icon: <SiCodingninjas size={25} />,
      content: `According to my words, I always put a lot of effort into doing well in my field and try to be done best.`,
    },
    {
      key: 4,
      title: "Learning new Technologies",
      icon: <GiProgression size={25} />,
      content: `Learning new technologies and improving my skills are the most important things, and I have always put a lot of effort into them.`,
    },
  ];

  const renderCards = () => {
    return cardsItem.map((item) => (
      <div
        key={item.key}
        className="w-full p-4 rounded-md shadow-2xl h-44 bg-slate-800 "
      >
        <div className="flex items-center gap-4 text-gray-50">
          <div>{item.icon}</div>
          <h3 className="text-sm font-medium ">{item.title}</h3>
        </div>
        <div className="py-4 text-xs leading-6 text-gray-50 ">
          <p>{item.content}</p>
        </div>
      </div>
    ));
  };

  return (
    <div
      id="about-me"
      className="w-full px-4 py-32 pt-4 pb-24 lg:flex lg:items-center lg:h-screen lg:custom-bg-clip-3 bg-slate-900 custom-bg-clip"
    >
      <div className="lg:container">
        <div className="grid lg:grid-cols-2">
          <div className="p-4 text-gray-50 md:text-center lg:text-left md:flex md:flex-col md:justify-center lg:pl-10 lg:pb-10 ">
            <h1 className="text-xl font-medium lg:text-2xl ">About Me</h1>
            <p className="w-full py-4 text-sm text-justify md:w-3/4 md:m-auto lg:m-0">
              I have been learning in this field since two and half years ago by
              attending online courses, and I have done some practical projects
              that you can see them by clicking on{" "}
              <a
                href="#portfolio"
                className="text-indigo-300 text-shadow font-lg"
              >
                (portfolio)
              </a>
              . also this is must be mentioned that I love this field and I
              always put a lot of effort into this and I like to be a useful
              person in a society .
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-0 text-sm primary-btn w-28 md:m-auto lg:m-0"
            >
              Hire Me
            </button>
          </div>
          <div className="grid gap-4 p-4 pb-10 md:grid-cols-2 ">
            {renderCards()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
