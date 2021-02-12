import "./App.css";

import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

import StartView from "./views/StartView/StartView";

import About from "./views/About/About";

import ProjectsView from "./views/ProjectsView/ProjectsView";

function App() {
  return (
    <div>
      <NavbarMenu />
      <StartView />
      <About />
      <ProjectsView />
    </div>
  );
}

export default App;
