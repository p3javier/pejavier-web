import "./App.css";

import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

import StartView from "./views/StartView/StartView";

import About from "./views/About/About";
function App() {
  return (
    <div>
      <NavbarMenu />
      <StartView />
      <About />
    </div>
  );
}

export default App;
