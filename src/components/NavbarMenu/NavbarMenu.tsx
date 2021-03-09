import React from "react";
import Component1 from "./Component1";

function NavBarMenu() {
  return (
    <nav
      className="bg-gray-800 bg-opacity-50 bg-clip-padding z-50 fixed w-screen"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <Component1 />
    </nav>
  );
}

export default NavBarMenu;
