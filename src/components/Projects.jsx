import React from "react";
import splashScreen from "../assets/vertical-code.png";

// project images
import eCommerceImg from "../assets/projects/e-commerce-backend.png";
import noSqlImg from "../assets/projects/nosql.png";
import projectTrackerImg from "../assets/projects/project-tracker.png";
import employeeTrackerImg from "../assets/projects/sql-employee-tracker.png";
import teamProfileImg from "../assets/projects/team-profile.png";
import weatherImg from "../assets/projects/weather.png";

// project demo links
// project code links

const Projects = () => {
  const project = [
    {
      id: 1,
      src: eCommerceImg,
      projectName: "eCommerce Back End",
    },
    {
      id: 2,
      src: noSqlImg,
      projectName: "NoSQL API",
    },
    {
      id: 3,
      src: projectTrackerImg,
      projectName: "Project Tracker",
    },
    {
      id: 4,
      src: employeeTrackerImg,
      projectName: "SQL Employee Tracker",
    },
    {
      id: 5,
      src: teamProfileImg,
      projectName: "Team Profile Generator",
    },
    {
      id: 6,
      src: weatherImg,
      projectName: "Weather Dashboard",
    },
  ];

  return (
    <div
      name="projects"
      className="h-full w-full top-20"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <div className="flex flex-col justify-center p-4 m-auto max-w-screen-lg w-full h-full">
        <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
          <p>Projects</p>
        </div>
        {/* cards  */}
        <div className="grid gap-8 px-0 rounded h-full md:grid-cols-2 lg:grid-cols-3">
          {project.map(({ id, src, projectName }) => (
            <div
              key={id}
              className="bg-slate-900 shadow-md shadow-gray-300 rounded-lg border text-gray-300 p-2 hover:scale-105"
            >
              <h1 className="text-xl ">{projectName} </h1>
              <img
                src={src}
                alt="screenshot"
                className="rounded-lg h-40 w-full"
              />
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
