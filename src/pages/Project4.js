import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Mouse from "../components/Mouse";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBottom left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
