import NavbarContent from "./NavbarContent";
import icon from "assets/icons/github-brands.svg";

const Component1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <NavbarContent />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            className=" p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={() => window.open("https://github.com/p3javier", "_blank")}
          >
            <span className="sr-only">Go to GitHub</span>
            <img className="h-8 w-auto" src={icon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component1;
