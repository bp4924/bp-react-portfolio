import React from "react";

//import pdfFile from "../assets/pdf/resume.pdf";
const docsURL =
  "https://docs.google.com/document/d/1eM1HUPHxeYcP-A4IPDxi19T48lak3MHnxQSy56dIZtM/edit?usp=sharing";

const Resume = () => {
  return (
    <div name="skills" className="h-screen w-full top-20">
      <div>
        <div className="flex flex-col align-middle p-4 m-auto max-w-screen-lg w-full h-screen">
          <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
            <p>Skills</p>
          </div>

          {/* proficiencies */}
          <div className="text-2xl text-center rounded-lg mb-4 text-white p-2 bg-slate-900">
            <p>Key Proficiencies</p>
          </div>
          <div className="flex items-center justify-center p-4 border rounded-lg">
            <ul className="w-1/3 text-white text-lg text-left">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JavaScript</li>
            </ul>
            <ul className="w-1/3 text-white text-lg text-center">
              <li>Python</li>
              <li>Java</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
            <ul className="w-1/3 text-white text-lg text-right">
              <li>SQL</li>
              <li>VBA</li>
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          {/* transferrable experiences */}
          <div className="text-2xl text-center rounded-lg mt-4 mb-4 text-white p-2 bg-slate-900">
            <p>Transferable Talents</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg md:flex-row">
            <ul className="flex flex-col   text-white text-lg text-center md:w-1/3 ">
              <li>Leadership</li>
              <li>Teamwork</li>
            </ul>
            <ul className="flex flex-col text-white text-lg text-center md:w-1/3">
              <li>Customer Service</li>
              <li>Communication</li>
            </ul>
            <ul className="flex flex-col  text-white text-lg text-center md:w-1/3">
              <li>Safety Management</li>
              <li>Attention to Detail</li>
            </ul>
          </div>

          {/* resume button */}
          <div>
            <div className="float-right mt-4 mb-4">
              <button className="bg-gray-800 text-center text-gray-400 px-4 py-2 border rounded-lg hover:scale-110 hover:bg-gray-400 hover:text-gray-900">
                <a target={"_blank"} rel="noreferrer" href={docsURL}>
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
