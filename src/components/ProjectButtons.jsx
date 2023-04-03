import React from "react";

function ProjectButtons({ demoLink, codeLink }) {
  return (
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
  );
}

export default ProjectButtons;
