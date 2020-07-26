import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';

const Project1 = () => {
  return (
    <div>
      <Navigation />
      <h3>Projet 1</h3>
      <ButtonsBottom left={'/'} right={'/projet-2'} />
    </div>
  );
};

export default Project1;