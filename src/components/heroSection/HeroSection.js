import React from "react";

function HeroSection() {
  return (
    <div
      id="home"
      className="w-full h-screen bg-cover bg-hero-pattern custom-bg-clip after:bg-slate-900 bg-center  after:absolute after:inset-0 after:bg-opacity-50 after:content-['']"
    >
      <div className="absolute z-30 flex flex-col items-start p-4 text-gray-100 left-10 top-40 md:right-40 md:left-auto">
        <div className="flex flex-row gap-2">
          <h5 className="origin-bottom-left opacity-0 md:text-xl animate-rotate ">
            Hello,
          </h5>
          <h5 className="origin-bottom-left opacity-0 md:text-xl animate-[rotate_1.5s_1.5s_forwards_ease-in-out] ">
            I am
          </h5>
        </div>
        <div className="flex flex-row gap-2 ">
          <h1 className="my-2 text-4xl opacity-0 font-medium delay-100 animate-[rotate_1.5s_2s_forwards_ease-in-out] origin-top-right  md:text-5xl custom-transition ">
            Hamid
          </h1>
          <h1 className="my-2 text-4xl opacity-0 font-medium delay-100 animate-[rotate_1.5s_3s_forwards_ease-in-out] origin-top-right  md:text-5xl custom-transition ">
            Hassani
          </h1>
        </div>
        <div className="flex flex-row gap-2">
          <h5 className="md:text-xl opacity-0 animate-[rotate_1.5s_4s_forwards_ease-in-out] origin-bottom-left ">
            Front-end
          </h5>
          <h5 className="md:text-xl opacity-0 animate-[rotate_1.5s_5s_forwards_ease-in-out] origin-bottom-left ">
            web
          </h5>
          <h5 className="md:text-xl opacity-0 animate-[rotate_1.5s_6s_forwards_ease-in-out] origin-bottom-left ">
            developer
          </h5>
        </div>
        <a href="#about-me" className=" primary-btn">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
