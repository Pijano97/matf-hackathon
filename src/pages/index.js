import React, { useState } from "react";
import HeroSection from "../components/HeroSection";

import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Sidebar from "../components/SideBar";
import Test from "../components/Tests/Test";
import Problem from "../components/Problem/Problem";
import Resenje from "../components/Resenje/Resenje";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutUs />
      <Problem />
      <Resenje />
      <Test />
    </>
  );
}

export default Home;
