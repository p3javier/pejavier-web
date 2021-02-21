import React, { FC } from "react";
import GLink from "components/GradientLink/GLink";

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
      <GLink
        url="https://github.com/p3javier/extremum-ecommerce-new"
        text="Project on Github"
      />
    </>
  );
};

export default ExtremumEcommerce;
