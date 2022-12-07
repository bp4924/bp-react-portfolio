import React from "react";
import splashScreen from "../assets/vertical-code.png";

import eCommerce from "../assets/projects/e-commerce-backend.png";
import noSql from "../assets/projects/nosql.png";
import projectTracker from "../assets/projects/project-tracker.png";
import employeeTracker from "../assets/projects/sql-employee-tracker.png";
import teamProfile from "../assets/projects/team-profile.png";
import weather from "../assets/projects/weather.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: eCommerce,
    },
    {
      id: 2,
      src: noSql,
    },
    {
      id: 3,
      src: projectTracker,
    },
    {
      id: 4,
      src: employeeTracker,
    },
    {
      id: 5,
      src: teamProfile,
    },
    {
      id: 6,
      src: weather,
    },
  ];
  return (
    <div
      name="projects"
      className="h-screen w-full"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <div className="flex flex-col justify-center p-4 m-auto max-w-screen-lg w-full h-full">
        <div className="text-2xl font-bold text-blue-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
          <p>Projects</p>
        </div>
        {/* cards  */}
        <div className="grid gap-8 px-0 md:grid-cols-2 lg:grid-cols-3 rounded h-auto">
          {projects.map(({ id, src }) => (
            <div
              key={id}
              className="bg-blue-900 shadow-md shadow-gray-300 rounded-lg border text-gray-300 p-2 hover:scale-105"
            >
              <img src={src} alt="screenshot" className="rounded-lg " />
              <div className="flex items-center justify-center">
                <button className="w-1/2 mt-2 mx-2 border rounded-lg hover:scale-105 hover:bg-gray-400 hover:text-gray-900">
                  demo
                </button>
                <button className="w-1/2 mt-2 mx-2 border rounded-lg hover:scale-105 hover:bg-gray-400 hover:text-gray-900">
                  code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//https://bp4924.github.io/BP-Project-Tracker/
//https://watch.screencastify.com/v/8UU8iDM3oLGrf4Ce0QGr - nosql api
//https://watch.screencastify.com/v/rWy1zdDhlbU3dRmQCcwj - employee tracker
//https://bp4924.github.io/BP-Weather/
//https://watch.screencastify.com/v/H3Fx0t2LXEaky0LiYaU6 - team profile
//https://watch.screencastify.com/v/CezrQxMzXkyMSvaGYd5h - ecommerce backend

export default Projects;
