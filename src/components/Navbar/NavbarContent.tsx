import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

const NavbarContent = () => {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <NavbarLogo />
      <NavbarLinks />
    </div>
  );
};

export default NavbarContent;
