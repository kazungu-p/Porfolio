import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (

    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>

  )
}

export default App
