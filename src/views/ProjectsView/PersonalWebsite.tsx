import React, { FC } from "react";

const PersonalWebsite: FC = () => {
  return (
    <div className="overflow-hidden">
      <p>This website was created using the following technologies:</p>
      <br />
      <ul className="list-disc list-inside">
        <li>TypeScript</li>
        <li>React (Create React App as starter)</li>
        <li>Tailwind CSS</li>
        <li>Lottie</li>
      </ul>
    </div>
  );
};

export default PersonalWebsite;
