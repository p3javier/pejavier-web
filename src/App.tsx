import React from "react";

import "./App.css";

import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

import StartView from "./views/StartView/StartView";

function App() {
  const [toggle, setToggle] = React.useState<boolean>(false);
  console.log("toggle", toggle);

  const buttonClasses = toggle
    ? "nm-flat-red-500-lg rounded-full hover:nm-convex-red-500-lg rounded-full"
    : "bg-blue-500 hover:bg-blue-500";
  return (
    <div>
      <NavbarMenu />
      <div className="flex items-center justify-center h-screen">
        <StartView />
        <button
          className={`p-3 rounded-sm ${buttonClasses}`}
          onClick={() => setToggle(!toggle)}
        >
          Toggle dsfdssdfdsfsdfdsfsdf
        </button>
      </div>
    </div>
  );
}

export default App;
