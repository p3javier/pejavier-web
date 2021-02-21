import React from "react";
import ImageProfile from "components/ImageProfile/ImageProfile";
import BioSummary from "components/BioSummary/BioSummary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const bioText =
  "Hi, I'm Javier, a fullstack developer specialized on front-end side. I'm also code for the web, my usual stack is: React + Redux + Express + Node.js + MySQL (or MariaDB) and additionally Python for specific things where it is more handy than JS.";

const StartView = () => {
  return (
    <div
      id="start"
      className="flex flex-col items-center flex-wrap overflow-auto mb-56"
    >
      <div className="my-2 px-8 mt-20">
        <ImageProfile />
      </div>

      <div className="my-2 px-8 w-screen md:w-2/3 lg:w-1/3 overflow-hidden">
        <BioSummary text={bioText} />
      </div>

      <div className="my-2 px-8">
        <a href="#about">
          <button
            className={`p-3 nm-flat-green-400-lg rounded-full hover:nm-convex-green-500-lg focus:outline-none`}
          >
            <FontAwesomeIcon
              className="text-white text-xl"
              icon={faArrowDown}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

//<Bio />
export default StartView;
