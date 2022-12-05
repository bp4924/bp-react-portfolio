import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    {
      id: 1,
      link: "About Me",
    },
    {
      id: 2,
      link: "Projects",
    },
    {
      id: 3,
      link: "Resume",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue-900 fixed md:flex-row">
      <div>
        <h1 className="text-5xl font-myName">Bernie Petters</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer font-medium text-gray-300 w-auto p-4 hover:scale-110"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-300 w-auto p-4 hover:scale-110 z-20 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col items-center absolute top-24 left-0 w-full h-auto bg-blue-900">
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer font-medium text-white bg-blue-900 w-120 h-12 p-4 hover:scale-110 hover:border hover:rounded-lg"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
