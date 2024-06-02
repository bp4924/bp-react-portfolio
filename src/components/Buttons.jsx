import React from "react";

function Buttons({ buttonLink, buttonText }) {
  return (
    <div className="float-right mt-4 mb-4">
      <button className="bg-gray-800 text-center text-gray-400 px-4 py-2 border rounded-lg hover:scale-110 hover:bg-gray-400 hover:text-gray-900">
        <div>
          <a target="_blank" rel="noreferrer" href={buttonLink}>
            {buttonText}
          </a>
        </div>
      </button>
    </div>
  );
}

export default Buttons;
