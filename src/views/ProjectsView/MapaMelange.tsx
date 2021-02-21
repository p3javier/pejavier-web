import React, { FC } from "react";
import GLink from "components/GradientLink/GLink";

const MapaMelange: FC = () => {
  return (
    <>
      <p>This website was created using the following technologies:</p>
      <br />
      <ul className="list-disc list-inside">
        <li>TypeScript</li>
        <li>React (Create React App as starter)</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Leaflet</li>
        <li>CityBik API</li>
        <li>Open Street Map and MapTiler (as tiles providers)</li>
      </ul>
      <br />
      <GLink url="https://mapa-melange.netlify.app/" text="Website" />
      <br />
      <div className="py-2"></div>
      <GLink
        url="https://github.com/p3javier/mapa-melange"
        text="Project on Github"
      />
    </>
  );
};

export default MapaMelange;
