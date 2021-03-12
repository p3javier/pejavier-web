const NavbarLogo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-8 w-auto"
        src="./android-chrome-512x512.png"
        alt="Workflow"
      />
      <img
        className="hidden lg:block h-8 w-auto"
        src="./name.svg"
        alt="Workflow"
      />
    </div>
  );
};

export default NavbarLogo;
