import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import DynamicText from "../components/DynamicText";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <SocialNetwork />
      <div className="home-main">
        <div className="main-content">
          <h1><span>AZ</span> AGENCY</h1>
          <h2>simply <DynamicText /></h2>
        </div>
      </div>
      <ButtonsBottom right={'/projet-1'} />
    </div>
  );
};

export default Home;
