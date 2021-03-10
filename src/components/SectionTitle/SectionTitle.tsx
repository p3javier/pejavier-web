import React, { FC } from "react";

interface ParentProp {
  title?: string;
}

const SectionTitle: FC<ParentProp> = ({ title }) => {
  return (
    <h1 className="mx-12 xs:mx-24" style={{ backdropFilter: "blur(20px)" }}>
      <span className="bg-gray-800 bg-opacity-50 bg-clip-padding px-4 pb-2 rounded-md text-white text-4xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {title}
        </span>
      </span>
    </h1>
  );
};

export default SectionTitle;
