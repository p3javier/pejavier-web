import React from "react";
import ImageProfile from "../../components/ImageProfile/ImageProfile";
import BioSummary from "../../components/BioSummary/BioSummary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const bioText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const StartView = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const buttonClasses = toggle
    ? "nm-flat-green-400-lg rounded-full hover:nm-convex-green-500-lg rounded-full"
    : "bg-blue-500 hover:bg-blue-500";
  return (
    <div className="flex flex-col items-center flex-wrap overflow-auto">
      <div className="my-2 px-8 mt-20">
        <ImageProfile />
      </div>

      <div className="my-2 px-8 w-screen md:w-2/3 lg:w-1/3 overflow-hidden">
        <BioSummary text={bioText} />
      </div>

      <div className="my-2 px-8">
        <button
          className={`p-3 rounded-sm ${buttonClasses}`}
          onClick={() => setToggle(!toggle)}
        >
          <FontAwesomeIcon className="text-white text-xl" icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
};

//<Bio />
export default StartView;
