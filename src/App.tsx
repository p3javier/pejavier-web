import "./App.css";

import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

import StartView from "./views/StartView/StartView";

import About from "./views/About/About";

import ProjectsView from "./views/ProjectsView/ProjectsView";

import ScrollReveal from "./components/ScrollReveal/ScrollReveal";

function App() {
  return (
    <div>
      <NavbarMenu />
      <StartView />
      <ScrollReveal style={{ backgroundColor: "rgba(0, 0, 0,0)" }}>
        <About />
      </ScrollReveal>
      <ScrollReveal style={{ backgroundColor: "rgba(0, 0, 0,0)" }}>
        <ProjectsView />
      </ScrollReveal>
    </div>
  );
}

export default App;
