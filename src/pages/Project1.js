import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBottom left={'/'} right={'/projet-2'} />
      </div>
    </main>
  );
};

export default Project1;