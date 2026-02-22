import React from "react";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About/>
      <Services/>
    </>

  )
}

export default Home;