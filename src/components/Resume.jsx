import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import pdfFile from "../assets/pdf/resume.pdf";
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
        <div className="flex items-center justify-center p-4">
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

        <div className="flex justify-center items-center">
          <Document file={pdfFile}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
