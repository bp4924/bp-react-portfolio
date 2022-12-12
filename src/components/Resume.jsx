import React from "react";
import pdfFile from "../assets/pdf/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import splashScreen from "../assets/vertical-code.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <div className="text-2xl text-center rounded-lg text-white p-2 bg-slate-900">
          <p>Key Proficiencies</p>
        </div>
        <div className="flex items-center justify-center">
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
        <div className="flex items-center justify-center text-gray-200 p-4">
          <button className="w-1/2 mt-2 mx-2 border rounded-lg bg-slate-900 hover:scale-105 hover:bg-gray-400 hover:text-slate-900">
            <div>View Resume</div>
          </button>
          <button className="w-1/2 mt-2 mx-2 border rounded-lg bg-slate-900 hover:scale-105 hover:bg-gray-400 hover:text-gray-900">
            <div>Download pdf</div>
          </button>
        </div>

        <div className="w-3/4 items-center">
          <Document file={pdfFile}>
            <Page pageNumber={1} renderTextLayer={false} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
