import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "resume",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center sticky top-0 w-full h-20 px-4 text-white bg-slate-900 md:flex-row">
      <div>
        <h1 className="text-5xl font-myName">Bernie Petters</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer font-medium text-gray-300 capitalize w-auto p-4 hover:scale-110"
          >
            <Link to={link} smooth duration={700} offset={-72}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-300 w-auto p-4 hover:scale-110 z-20 md:hidden"
      >
        {/* select hamburger based on state */}
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-4 right-4 border rounded-lg h-auto bg-slate-900 md:hidden">
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className="flex justify-center cursor-pointer font-medium text-white bg-slate-900 capitalize my-2 w-40 h-auto hover:scale-110 hover:border hover:rounded-lg"
            >
              <Link
                onClick={
                  () => setNav(!nav) /* change setNav state to close menu*/
                }
                to={link}
                smooth
                duration={700}
                offset={-72}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
