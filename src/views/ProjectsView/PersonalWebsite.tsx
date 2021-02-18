import React, { FC } from "react";

const PersonalWebsite: FC = () => {
  return (
    <>
      <p>This website was created using the following technologies:</p>
      <br />
      <ul className="list-disc list-inside">
        <li>TypeScript</li>
        <li>React (Create React App as starter)</li>
        <li>Tailwind CSS</li>
        <li>Lottie</li>
      </ul>
    </>
  );
};

export default PersonalWebsite;
