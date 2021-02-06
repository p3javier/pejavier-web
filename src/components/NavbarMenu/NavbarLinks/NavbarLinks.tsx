import Start from "./Start";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const NavbarLinks = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Start />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
export default NavbarLinks;
