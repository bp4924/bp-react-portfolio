import React from "react";
// import { Document, Page, pdfjs } from "react-pdf";

import pdfFile from "../assets/pdf/resume.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div name="skills" className="h-screen w-full top-20">
      <div>
        <div className="flex flex-col justify-center p-4 h-screen max-w-screen-lg m-auto">
          <div className="text-2xl font-bold text-slate-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
            <p>Skills</p>
          </div>
          <div className="text-2xl text-center rounded-lg text-white p-2 bg-slate-900">
            <p>Key Proficiencies</p>
          </div>
          <div className="flex items-center justify-center p-4 border rounded-lg">
            <ul className="w-1/3 text-white text-lg text-left">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <ul className="w-1/3 text-white text-lg text-right">
              <li>SQL</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <div className="float-right mt-4">
              <button className="bg-gray-800 text-center text-gray-400 px-4 py-2 border rounded-lg hover:scale-110 hover:text-gray-300">
                <a target={"_blank"} rel="noreferrer" href={pdfFile}>
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
