import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-screen bg-cover bg-hero-pattern custom-bg-clip after:bg-slate-900 bg-center  after:absolute after:inset-0 after:bg-opacity-50 after:content-['']">
      <div className="absolute z-30 p-4 text-gray-100 left-10 top-40 md:right-40 md:left-auto">
        <h5 className="origin-bottom-left opacity-0 md:text-xl animate-rotate ">
          Hello, I am
        </h5>
        <h1 className="my-2 text-4xl opacity-0 font-medium delay-100 animate-[rotate_1.5s_1.5s_forwards_ease-in-out] origin-top-right  md:text-5xl custom-transition ">
          Hamid Hassani
        </h1>
        <h5 className="md:text-xl opacity-0 animate-[rotate_1.5s_3s_forwards_ease-in-out] origin-bottom-left ">
          Front-end web developer
        </h5>
        <button className="primary-btn">Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;
