import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiMenuLine } from "react-icons/ri";
import Footer from "../footer/Footer";

function Layout({ children, setOpen }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [scrolled, setScrolled] = useState(Math.floor(window.pageYOffset));

  const [isScrolledUserTo, setIsScrolledUserTo] = useState(
    scrolled >= 670 ? true : false
  );

  const handleOnClick = () => {
    setTimeout(() => {
      setIsActiveMenu(!isActiveMenu);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(Math.floor(window.pageYOffset));

      Math.floor(window.pageYOffset) > 670
        ? setIsScrolledUserTo(true)
        : setIsScrolledUserTo(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-slate-900">
      <div className="container ">
        <nav
          className={`fixed top-0 z-20 flex flex-row justify-between w-full p-4 md:justify-around custom-transition bg-opacity-90 ${
            isScrolledUserTo ? "bg-slate-800 shadow-xl" : "bg-transparent"
          } `}
        >
          <a href="#home">
            <h1 className="text-xl font-bold text-indigo-300 text-shadow ">
              Hamid Hassani
            </h1>
          </a>

          <div className="md:hidden">
            {!isActiveMenu ? (
              <RiMenuLine
                className="absolute z-20 cursor-pointer text-gray-50 hover:text-indigo-400 custom-transition right-4 top-4"
                size={28}
                onClick={() => setIsActiveMenu(!isActiveMenu)}
              />
            ) : (
              <RiMenu3Line
                className="absolute z-20 cursor-pointer text-gray-50 hover:text-indigo-400 custom-transition right-4 top-4"
                size={28}
                onClick={() => setIsActiveMenu(!isActiveMenu)}
              />
            )}
            <ul
              className={`flex flex-col gap-8 items-center text-gray-100 fixed top-0 w-full h-screen  ${
                !isActiveMenu ? "left-full " : "left-0"
              }  bg-slate-800 justify-center text-xl font-bold z-10 custom-transition `}
            >
              <li>
                <a
                  onClick={() => handleOnClick()}
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleOnClick()}
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="#about-me"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleOnClick()}
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="#skills"
                >
                  My Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleOnClick()}
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleOnClick()}
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="#footer"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <ul className="flex-row items-center justify-around hidden w-1/2 text-gray-100 md:flex ">
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="#about-me"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="#skills"
              >
                My Skills
              </a>
            </li>
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
          </ul>
          <button
            onClick={() => setOpen(true)}
            className="hidden px-6 py-2 text-sm font-medium text-indigo-300 bg-transparent border border-indigo-300 rounded-md shadow-xl cursor-pointer md:inline-block hover:bg-indigo-400 custom-transition hover:text-gray-100 "
          >
            Contact Me
          </button>
        </nav>
      </div>
      <main>{children}</main>
      <Footer setOpen={setOpen} />
    </div>
  );
}

export default Layout;
