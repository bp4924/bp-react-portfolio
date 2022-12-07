import React from "react";
import splashScreen from "../assets/vertical-code.png";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <div className="flex flex-col justify-center p-4 m-auto max-w-screen-lg">
        <div className="text-2xl font-bold text-blue-900 bg-orange-500 p-4 rounded-lg mb-4 text-center m-0">
          <p>About</p>
        </div>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam dolores sequi repellat vero odio hic saepe et, blanditiis
          molestiae eum a iure labore, adipisci, corporis laudantium ut ipsa
          aliquid.
        </p>

        <br />

        <p className="text-white italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet
          recusandae ducimus perspiciatis possimus explicabo, architecto animi
          eos. Mollitia, tempora veniam! Laudantium quis modi esse!
        </p>
      </div>
    </div>
  );
};

export default About;
