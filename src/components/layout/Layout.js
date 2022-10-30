import React, { useState } from "react";
import { RiMenu3Line, RiMenuLine } from "react-icons/ri";

function Layout({ children }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="container w-full">
        <nav className="fixed top-0 z-20 flex flex-row justify-between w-full p-4 md:justify-around">
          <h1 className="text-xl font-bold text-indigo-300 text-shadow ">
            Hamid Hassani
          </h1>

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
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="/"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="/"
                >
                  My Skills
                </a>
              </li>
              <li>
                <a
                  className="hover:tracking-widest custom-transition hover:text-indigo-400 hover:text-shadow "
                  href="/"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <ul className="flex-row items-center justify-around hidden w-1/2 text-gray-100 md:flex ">
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="/"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="/"
              >
                My Skills
              </a>
            </li>
            <li>
              <a
                className="font-medium hover:text-shadow hover:text-indigo-300 custom-transition"
                href="/"
              >
                Portfolio
              </a>
            </li>
          </ul>
          <button className="hidden px-6 py-2 text-sm font-medium text-indigo-300 bg-transparent border border-indigo-300 rounded-md shadow-xl cursor-pointer md:inline-block hover:bg-indigo-400 custom-transition hover:text-gray-100 ">
            Contact Me
          </button>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
