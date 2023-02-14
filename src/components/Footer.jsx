import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-20 p-4 text-white bg-slate-900">
      <div className="flex justify-center items-center w-full">
        <a href="https://github.com/bp4924" target="_blank" rel="noreferrer">
          <FaGithub size={30} className="cursor-pointer w-20" />
        </a>
        <a
          href="https://www.linkedin.com/in/bernie-petters"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} className="cursor-pointer w-20" />
        </a>
        {/*         <a
          href="https://meta.stackoverflow.com/users/19053436/bernie-petters"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow size={30} className="cursor-pointer w-20" />
        </a>
 */}{" "}
      </div>
      <p className="text-center pb-4 text-sm">Copyright 2023</p>
    </div>
  );
};

export default Footer;
