import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";

const Contact = () => {

  return (
    <div className="contact">
      <Navigation />
      <Logo />
      <ContactForm />
      <div className="contact-infos">
        <div className="address">
          <div className="content">
            <h4>adresse</h4>
            <p>12 rue Laplace</p>
            <p>33700 Mérignac</p>
          </div>
        </div>
        <div className="phone">
          <div className="content">
            <h4>téléphone</h4>
            <p>05 42 84 42 84</p>
          </div>
        </div>
        <div className="email">
          <div className="content">
            <h4>email</h4>
            <p>azagency@gmail.com</p>
          </div>
        </div>
        <SocialNetwork />
        <div className="credits">
          <p>j.azambourg - 2020</p>
        </div>
      </div>
      <ButtonsBottom left={"/projet-4"} />
    </div>
  );
};

export default Contact;
