import React, { FC } from "react";

const ExtremumEcommerce: FC = () => {
  return (
    <>
      <p>This website was created using the following technologies:</p>
      <br />
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React (Create React App as starter)</li>
        <li>Redux</li>
        <li>Metro UI</li>
        <li>Auth0 (as user authentication provider)</li>
        <li>Formik</li>
        <li>MongoDB (with mongoose)</li>
        <li>Express.js</li>
        <li>Node.js</li>
      </ul>
      <br />
      <a
        href="https://github.com/p3javier/extremum-ecommerce-new"
        target="_blank"
        rel="noreferrer"
        className="underline font-bold bg-clip-padding bg-gray-800 bg-opacity-0 transition duration-150 ease-in-out hover:bg-opacity-30 hover:no-underline p-1 rounded-md"
      >
        <span className="bg-clip-text transition duration-300 ease-in-out  hover:text-transparent bg-gradient-to-r from-green-400 to-blue-500 focus:bg-gradient-to-r focus:from-red-600 focus:to-yellow-500 focus:text-transparent">
          Project on Github
        </span>
      </a>
    </>
  );
};

export default ExtremumEcommerce;
