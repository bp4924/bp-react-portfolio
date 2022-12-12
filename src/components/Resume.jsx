import React from "react";
import splashScreen from "../assets/vertical-code.png";

const Resume = () => {
  return (
    <div
      name="resume"
      className="h-full w-full"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <div className="flex flex-col justify-center p-4 m-auto max-w-screen-lg w-full h-full">
        <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
          <p>Resume</p>
        </div>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam dolores sequi repellat vero odio hic saepe et, blanditiis
          molestiae eum a iure labore, adipisci, corporis laudantium ut ipsa
          aliquid.
        </p>
      </div>
    </div>
  );
};

export default Resume;
