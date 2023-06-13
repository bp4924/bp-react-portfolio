// using rafce snippet
import React from "react";

const Home = () => {
  return (
    <div name="home" className="h-full w-full">
      <div className="flex flex-col justify-center h-screen max-w-screen-lg m-auto">
        <div className="text-4xl font-bold text-slate-900  bg-orange-500 p-4 rounded-lg mb-4 text-center ">
          Full Stack Developer | Software Engineer
        </div>
        <div className="bg-slate-900 italic text-gray-300 text-lg w-full p-4 rounded-lg text-center">
          <p>
            Pilot | Runner | Navy Veteran <br /> Indecision may or may not be my
            biggest problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
