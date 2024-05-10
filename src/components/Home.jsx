// using rafce snippet
import React from "react";

const Home = () => {
  return (
    <div name="home" className="h-full w-full">
      <div className="flex flex-col justify-center h-screen max-w-screen-lg m-auto">
        <div className="text-4xl font-bold text-slate-900  bg-orange-500 p-4 rounded-lg mb-4 text-center ">
          Software Engineer | Full Stack Developer
        </div>
        <div className="bg-slate-900 italic text-gray-300 text-lg w-full p-4 rounded-lg text-center">
          <p>
            Pilot | Runner | Navy Veteran <br /> <br /> I can't change the
            direction of the wind, but I can adjust my sails to always reach my
            destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
