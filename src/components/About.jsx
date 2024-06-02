import React from "react";
import headShot from "../assets/BP.jpg";
import Buttons from "./Buttons";

const portfolioCode = "https://github.com/bp4924/bp-react-portfolio";

const About = () => {
  return (
    <div name="about" className="h-screen w-full top-20">
      <div>
        <div className="flex flex-col align-middle p-4 m-auto max-w-screen-lg w-full h-screen">
          <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
            <p>About</p>
          </div>
          <div className="items-center">
            <div className="text-white bg-slate-900 text-lg p-4 italic rounded-lg">
              <p>
                I hold a Bachelors Degree in Industrial Engineering from Auburn
                University, and am a graduate of the Georgia Tech Full-Stack
                Coding Bootcamp My experience includes the complete MERN stack,
                as well as JavaScript, HTML, and CSS.
              </p>
              <br />
              <p>
                I love solving puzzles and finding innovative solutions to
                complex problems.
              </p>
            </div>
            <div className="justify-center text-center p-4 m-auto max-w-screen-lg w-full">
              <Buttons
                buttonLink={portfolioCode}
                buttonText={"View code for this portfolio"}
              />

              <div className="hidden md:flex justify-center">
                <img
                  src={headShot}
                  alt="head shot"
                  className="w-44 rounded-lg m-4 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
