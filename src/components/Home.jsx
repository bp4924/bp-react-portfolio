// using rafce snippet
import React from "react";
// initial screen image from istockphoto.com
//import splashScreen from "../assets/vertical-code.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full absolute top-20 bg-teal-200"
      /*       style={{ backgroundImage: `url(${splashScreen})` }}
       */
    >
      <div className="flex flex-col items-center justify-center h-screen max-w-screen-lg m-auto mx-4">
        <div>
          <h3 className="text-4xl font-bold text-blue-900  bg-orange-500 p-4 rounded mb-4 text-center ">
            Full Stack Developer
          </h3>
          <p className="bg-blue-900 italic text-gray-300 text-lg p-4 rounded ">
            Pilot | Runner | Navy Vet | Indecision may or may not be my biggest
            problem
          </p>
        </div>
        <div>
          <button className="bg-gray-800 text-center text-gray-400 m-4 px-4 border rounded hover:scale-110">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
