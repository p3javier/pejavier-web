import React, { FC } from "react";

interface LinkProps {
  url: string;
  text: string;
}

const GLink: FC<LinkProps> = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="underline font-bold bg-clip-padding bg-gray-800 bg-opacity-0 transition duration-150 ease-in-out hover:bg-opacity-30 hover:no-underline p-1 rounded-md"
    >
      <span className="bg-clip-text transition duration-300 ease-in-out  hover:text-transparent bg-gradient-to-r from-green-400 to-blue-500 focus:bg-gradient-to-r focus:from-red-600 focus:to-yellow-500 focus:text-transparent">
        {text}
      </span>
    </a>
  );
};

export default GLink;
