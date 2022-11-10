import React, { useEffect, useState } from "react";

function SkillsSection() {
  const [fifty, setFifty] = useState(360);
  const [eighty, setEighty] = useState(360);
  const [sixty, setSixty] = useState(360);
  const [nightyFive, setNightyFive] = useState(360);

  const [scrolled, setScrolled] = useState(Math.floor(window.pageYOffset));

  const skillsDetails = [
    {
      title: "HTML5",
      amount: "95%",
    },
    {
      title: "CSS3",
      amount: "95%",
    },
    {
      title: "Sass(SCSS)",
      amount: "85%",
    },
    {
      title: "TailwindCss",
      amount: "90%",
    },
    {
      title: "JavaScript",
      amount: "90%",
    },
    {
      title: "React js",
      amount: "90%",
    },
    {
      title: "React-Redux",
      amount: "60%",
    },
    {
      title: "Next js",
      amount: "85%",
    },
    {
      title: "Git",
      amount: "85%",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolledTop = Math.floor(window.pageYOffset);

      setScrolled(scrolledTop);

      if (scrolledTop >= 1250 || scrolled >= 1250) {
        setFifty(50);
        setEighty(80);
        setSixty(60);
        setNightyFive(95);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderSkillDetails = () => {
    return skillsDetails.map((skill) => (
      <div className="skill-detail" key={skill.title}>
        <div className="relative shadow-2xl bar-wrapper ">
          <div className="bar">
            <svg className="svg" width="100%" height="100%">
              <circle className="circle-back-bar " cx="58" cy="58" r="55" />
              <circle
                className="circle-bar "
                style={{
                  stroke: `${
                    skill.title === "HTML5"
                      ? "#f97316"
                      : skill.title === "CSS3"
                      ? "#3b82f6"
                      : skill.title === "Sass(SCSS)"
                      ? "#ec4899"
                      : skill.title === "TailwindCss"
                      ? "#0ea5e9"
                      : skill.title === "JavaScript"
                      ? "#fbbf24"
                      : skill.title === "React js"
                      ? "#818cf8"
                      : skill.title === "React-Redux"
                      ? "#9333ea"
                      : skill.title === "Next js"
                      ? "#cbd5e1"
                      : skill.title === "Git" && "#ef4444"
                  }`,
                  strokeDashoffset: `${
                    skill.title === "HTML5"
                      ? fifty
                      : skill.title === "CSS3"
                      ? fifty
                      : skill.title === "Sass(SCSS)"
                      ? eighty
                      : skill.title === "TailwindCss"
                      ? sixty
                      : skill.title === "JavaScript"
                      ? sixty
                      : skill.title === "React js"
                      ? sixty
                      : skill.title === "React-Redux"
                      ? nightyFive
                      : skill.title === "Next js"
                      ? eighty
                      : skill.title === "Git" && eighty
                  }`,
                }}
                cx="58"
                cy="58"
                r="55"
              />
            </svg>
          </div>
          <div className="absolute inset-0 rounded-full shadow-4xl bg-slate-600">
            <div className="absolute flex flex-col items-center justify-center rounded-full text-gray-50 inset-4 bg-slate-600">
              <span className="amount-of-skill ">{skill.amount}</span>
              <h3 className="text-sm">{skill.title}</h3>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
      id="skills"
      className="py-24 -mt-32 lg:flex lg:relative lg:items-center lg:p-14 custom-bg-clip-2 lg:custom-bg-clip-3 lg:h-screen bg-slate-800"
    >
      <h2 className="mb-4 text-2xl text-center lg:absolute lg:top-40 lg:text-4xl lg:left-2/4 lg:-translate-x-1/2 font-lg text-gray-50 ">
        My Skills
      </h2>
      <div className="relative grid lg:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 ">
        {renderSkillDetails()}
      </div>
    </div>
  );
}

export default SkillsSection;
