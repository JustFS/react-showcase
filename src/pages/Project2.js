import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';

const Project2 = () => {
  return (
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={1} />
      <ButtonsBottom left={'/projet-1'} right={'/projet-3'} />
    </div>
  );
};

export default Project2;