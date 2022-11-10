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
      content: `As all programmers enjoy solving problems and fixing bugs, I also enjoy solving problems and fixing bugs and I get a good feeling from this!`,
    },
    {
      key: 2,
      title: "Teamwork",
      icon: <RiTeamLine size={34} />,
      content: `Teamwork is very important in our field and I'm interested in working with a good team.`,
    },
    {
      key: 3,
      title: "Hard Working and Responsibility",
      icon: <SiCodingninjas size={25} />,
      content: `As I said, I am very interested in this field and I will do my best to deliver the tasks on time and with the best quality.`,
    },
    {
      key: 4,
      title: "Learning new Technologies",
      icon: <GiProgression size={25} />,
      content: `I love this field and I always try to improve my expertise and skills, and  I have good feelings about this.`,
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
              I have been learning in this field for about two and a half years,
              just like other people who like the field and begin
              autodidacticism, I started and have been learning about this field
              by attending online courses, I started learning in this field
              about two and a half years ago. I was trained in general for two
              years and it has been six months that I have been learning
              front-end web professionally and deeply, and I have also done some
              examples of work that you can see below. Be sure to check the
              portfolio, I hope you like it!
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
