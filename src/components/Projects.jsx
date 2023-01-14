import React from "react";

// project images
import eCommerceImg from "../assets/projects/e-commerce-backend.png";
import noSqlImg from "../assets/projects/nosql.png";
//import projectTrackerImg from "../assets/projects/project-tracker.png";
import schedulerImg from "../assets/projects/scheduler.jpg";
import employeeTrackerImg from "../assets/projects/sql-employee-tracker.png";
//import teamProfileImg from "../assets/projects/team-profile.png";
import weatherImg from "../assets/projects/weather.png";
import lyfbroImg from "../assets/projects/lyfbro.png";

// project demo links
const eCommerceDemoLink =
  "https://watch.screencastify.com/v/CezrQxMzXkyMSvaGYd5h";
const noSqlDemoLink = "https://watch.screencastify.com/v/8UU8iDM3oLGrf4Ce0QGr";
const schedulerDemoLink = "https://bp4924.github.io/BP-Scheduler/";
const employeeTrackerDemoLink =
  "https://watch.screencastify.com/v/rWy1zdDhlbU3dRmQCcwj";
//const teamProfileDemoLink =   "https://watch.screencastify.com/v/H3Fx0t2LXEaky0LiYaU6";
const weatherDemoLink = "https://bp4924.github.io/BP-Weather";
const lyfbroDemolink = "https://lyfbro100.herokuapp.com/login";

// project code links
const eCommerceCodeLink = "https://github.com/bp4924/BP-ORM-eCommerce-Back-End";
const noSqlCodeLink = "https://github.com/bp4924/BP-NoSql-Social-Network-API";
const schedulerCodeLink = "https://github.com/bp4924/BP-Scheduler";
const employeeTrackerCodeLink =
  "https://github.com/bp4924/BP-SQL-Employee-Tracker";
//const teamProfileCodeLink =  "https://github.com/bp4924/BP-Team-Profile-Generator";
const weatherCodeLink = "https://github.com/bp4924/BP-Weather";
const lyfbroCodelink = "https://github.com/bp4924/Lyfbro";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: eCommerceImg,
      projectName: "eCommerce Back End",
      projectDescription: "Express.js API connected using Sequelize and MySq",
      demoLink: eCommerceDemoLink,
      codeLink: eCommerceCodeLink,
    },
    {
      id: 2,
      src: noSqlImg,
      projectName: "NoSQL API",
      projectDescription:
        "API for a social network using Express.js, MongoDB, and Mongoose ODM",
      demoLink: noSqlDemoLink,
      codeLink: noSqlCodeLink,
    },
    {
      id: 3,
      src: schedulerImg,
      projectName: "Scheduler",
      projectDescription:
        "Hourly schedule using HTML, CSS, and jQuery DOM manipulation",
      demoLink: schedulerDemoLink,
      codeLink: schedulerCodeLink,
    },
    {
      id: 4,
      src: employeeTrackerImg,
      projectName: "Employee Tracker",
      projectDescription: "Command-line app using Node.js, Inquirer, and MySQL",
      demoLink: employeeTrackerDemoLink,
      codeLink: employeeTrackerCodeLink,
    },
    {
      id: 5,
      src: lyfbroImg,
      projectName: "Lyfbro Fitness Tracker",
      projectDescription:
        "Collaborative project. Fitness tracking with data visualization",
      demoLink: lyfbroDemolink,
      codeLink: lyfbroCodelink,
    },
    {
      id: 6,
      src: weatherImg,
      projectName: "Weather Dashboard",
      projectDescription:
        "Searchable by location using jQuery and server-side API calls",
      demoLink: weatherDemoLink,
      codeLink: weatherCodeLink,
    },
  ];

  return (
    <div name="projects" className="h-full w-full">
      <div className="flex flex-col justify-center p-4 m-auto max-w-screen-lg w-full h-full">
        <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
          <p>Projects</p>
        </div>
        {/* cards  */}
        <div className="grid gap-8 px-0 rounded h-full md:grid-cols-2 lg:grid-cols-3">
          {project.map(
            ({
              id,
              src,
              projectName,
              projectDescription,
              demoLink,
              codeLink,
            }) => (
              <div
                key={id}
                className="bg-slate-900 shadow-md shadow-gray-300 rounded-lg border text-gray-300 p-2 hover:scale-105"
              >
                <h1 className="text-xl text-center ">{projectName} </h1>
                <h2 className="text-l text-center">{projectDescription} </h2>
                <img
                  src={src}
                  alt="screenshot"
                  className="rounded-lg h-40 w-full"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 mt-2 mx-2 border rounded-lg hover:scale-105 hover:bg-gray-400 hover:text-gray-900">
                    <div>
                      <a target="_blank" rel="noreferrer" href={demoLink}>
                        demo
                      </a>
                    </div>
                  </button>
                  <button className="w-1/2 mt-2 mx-2 border rounded-lg hover:scale-105 hover:bg-gray-400 hover:text-gray-900">
                    <div>
                      <a target="_blank" rel="noreferrer" href={codeLink}>
                        code
                      </a>
                    </div>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
