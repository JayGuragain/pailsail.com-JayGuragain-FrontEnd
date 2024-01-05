import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
