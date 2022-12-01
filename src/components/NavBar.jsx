import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  /* replace li's using map */
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
      link: "resume",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-auto p-8 text-white bg-blue-900 fixed capitalize md:flex-row">
      <div>
        <h1 className="text-4xl font-myName">Bernie Petters</h1>
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
    </div>
  );
};

export default NavBar;
