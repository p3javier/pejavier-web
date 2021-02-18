import React, { FC } from "react";

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
    </>
  );
};

export default MapaMelange;
