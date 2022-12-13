import React from "react";
import splashScreen from "../assets/vertical-code.png";
import headShot from "../assets/bp-pic.png";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full top-20"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <div className="flex flex-col align-middle p-4 m-auto max-w-screen-lg w-full h-screen">
        <div>
          <img
            src={headShot}
            alt="head shot"
            className="w-44 rounded-lg m-4 "
          />
        </div>
        <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
          <p>About</p>
        </div>
        <div className="text-white bg-slate-900 text-lg p-4 italic rounded-lg">
          <p>
            Recent graduate of the Georgia Tech Full-Stack Coding Bootcamp, with
            experience in the complete MERN stack, as well as JavaScript, HTML,
            and CSS.
          </p>
          <br />
          <p>
            I have always enjoyed solving puzzles and finding innovative
            solutions to complex problems. I am very excited to embark on this
            new adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
