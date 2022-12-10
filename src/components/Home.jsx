// using rafce snippet
import React from "react";
// initial screen image from istockphoto.com
import splashScreen from "../assets/vertical-code.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full top-20"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen max-w-screen-lg m-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl font-bold text-slate-900  bg-orange-500 p-4 rounded-lg mb-4 text-center m-0 ">
            Full Stack Developer
          </h3>
          <p className="bg-slate-900 italic text-gray-300 text-lg mx-6 p-4 rounded-lg text-center">
            Pilot | Runner | Navy Vet <br /> Indecision may or may not be my
            biggest problem.
          </p>
        </div>
        {/*         <div>
          <button className="bg-gray-800 text-center text-gray-400 m-4 px-4 py-2 border rounded-lg hover:scale-110 hover:text-gray-300">
            Portfolio
          </button>
        </div>
 */}{" "}
      </div>
    </div>
  );
};

export default Home;
