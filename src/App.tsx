import Navbar from "./components/Navbar/Navbar";

import StartView from "./views/StartView/StartView";

import About from "./views/About/About";

import ProjectsView from "./views/ProjectsView/ProjectsView";

import Social from "./views/Social/Social";

import ScrollReveal from "./components/ScrollReveal/ScrollReveal";

function App() {
  return (
    <div className="max-w-full" id="app">
      <Navbar />
      <StartView />
      <ScrollReveal style={{ backgroundColor: "rgba(0, 0, 0,0)" }}>
        <About />
      </ScrollReveal>
      <ScrollReveal style={{ backgroundColor: "rgba(0, 0, 0,0)" }}>
        <ProjectsView />
      </ScrollReveal>
      <ScrollReveal style={{ backgroundColor: "rgba(0, 0, 0,0)" }}>
        <Social />
      </ScrollReveal>
    </div>
  );
}

export default App;
/**
 * <ScrollReveal style={{ backgroundColor: "rgba(0, 0, 0,0)" }}>
        <ProjectsView />
      </ScrollReveal>
 */
