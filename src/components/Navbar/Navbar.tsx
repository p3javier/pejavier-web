import React from "react";
import NavbarMenu from "./NavbarMenu";

function NavBarMenu() {
  return (
    <nav
      className="bg-gray-800 bg-opacity-50 bg-clip-padding z-50 fixed w-screen"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <NavbarMenu />
    </nav>
  );
}

export default NavBarMenu;
