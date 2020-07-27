import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';

const Project4 = () => {
  return (
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={3} />
      <ButtonsBottom left={'/projet-3'} right={'/contact'} />
    </div>
  );
};

export default Project4;