import React from "react";

import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";

const Footer = ({ setOpen }) => {
  const socialMedias = [
    {
      id: 1,
      icon: <BsTwitter size={28} />,
      link: "https://twitter.com/Hamid_js_dev",
    },
    {
      id: 2,
      icon: <BsInstagram size={28} />,
      link: "https://www.instagram.com/hamid.programmer.js/",
    },
    {
      id: 3,
      icon: <BsGithub size={28} />,
      link: "https://github.com/hamit19",
    },
    {
      id: 4,
      icon: <BsLinkedin size={28} />,
      link: "https://www.linkedin.com/in/hamid-hassani-a431b0244/",
    },
  ];

  const subFooterSocialMedias = [
    {
      id: 1,
      title: "Phone",
      content: "+989014693924",
      icon: <BsTelephoneFill />,
      link: "tel:+989014693924",
    },
    {
      id: 2,
      title: "Email",
      content: "hamidhassaniofficial@gmail.com",
      icon: <MdEmail />,
      link: "mailto:hamidhassaniofficial@gmail.com",
    },
    {
      id: 3,
      title: "Location",
      content: "Isfahan, Iran",
      icon: <MdLocationOn />,
      link: "https://goo.gl/maps/w1v52aEHB7gGkbBV8",
    },
  ];

  const renderSocial = () => {
    return socialMedias.map((social) => (
      <div
        className='flex items-center justify-center p-5 rounded-lg shadow-2xl cursor-pointer sm:p-6 group hover:shadow-md hover:shadow-indigo-300/50 custom-transition bg-slate-700 '
        key={social.id}
      >
        <a
          className='text-gray-50 group-hover:text-indigo-400 custom-transition '
          href={social.link}
          target='_blank'
          rel='noreferrer'
        >
          {social.icon}
        </a>
      </div>
    ));
  };

  const renderFooterSocialMedias = () => {
    return subFooterSocialMedias.map((social) => (
      <a href={social.link} key={social.id} target='_blank' rel='noreferrer'>
        <div className='flex flex-row gap-4 py-4 cursor-pointer group '>
          <div className='self-center p-3 border rounded-full group-hover:shadow-md group-hover:text-indigo-300 custom-transition group-hover:shadow-indigo-300/50 text-gray-50'>
            {social.icon}
          </div>
          <div className='flex flex-col pt-1 '>
            <h5 className='text-xs font-lg group-hover:text-shadow group-hover:text-indigo-300 custom-transition text-gray-50 lg:!text-lg xl:!text-xl'>
              {" "}
              {social.title}
            </h5>
            <p className='text-sm font-lg group-hover:text-shadow group-hover:text-indigo-300 custom-transition lg:!text-lg xl:!text-xl text-gray-50'>
              {social.content}
            </p>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <div id='footer' className='bg-slate-900 lg:!text-lg xl:!text-2xl'>
      <div className='flex flex-col items-center justify-around h-40 gap-4 p-4 mb-10 sm:flex-row bg-slate-800 text-gray-50 '>
        <h2 className='font-bold text-center sm:text-left text-md md:text-2xl'>
          I am available for new projects, Want to work with me?
        </h2>
        <button
          onClick={() => setOpen(true)}
          className='m-0 shadow-xl primary-btn '
        >
          Hire Me
        </button>
      </div>

      <div>
        <h3 className='py-8 text-3xl text-center font-lg text-gray-50 lg:font-bold'>
          Follow Me
        </h3>
        <div className='flex flex-row justify-center gap-4 p-4 my-10 sm:gap-8 1 sm:flex-row'>
          {renderSocial()}
        </div>
        <div className='flex py-10'>
          <div className='flex flex-col justify-around w-3/4 py-8 m-auto border-t md:flex-row '>
            {renderFooterSocialMedias()}
          </div>
        </div>
      </div>
      <div className='py-6 border-t border-b border-t-slate-500 border-b-slate-500 '>
        <h3 className='text-sm text-center font-lg text-gray-50 lg:text-lg'>
          &copy; All rights reserved{" "}
          <a
            className='text-indigo-300 text-shadow'
            href='https://github.com/hamit19'
            target='_blank'
            rel='noreferrer'
          >
            Hamid Hassani
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
