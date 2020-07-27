import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';

const Project3 = () => {
  return (
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={2} />
      <ButtonsBottom left={'/projet-2'} right={'/projet-4'} />
    </div>
  );
};

export default Project3;