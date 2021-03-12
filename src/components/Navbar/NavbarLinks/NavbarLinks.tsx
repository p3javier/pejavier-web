import Start from "./Start";
import About from "./About";
import Projects from "./Projects";
import Social from "./Social";

const NavbarLinks = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Start />
        <About />
        <Projects />
        <Social />
      </div>
    </div>
  );
};
export default NavbarLinks;
