import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 p-8 text-white bg-blue-900 capitalize">
      <div>
        <h1 className="text-4xl font-myName">Bernie Petters</h1>
      </div>
      <ul>
        <li className="cursor-pointer font-medium text-gray-300 hover:scale-110">
          home
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
