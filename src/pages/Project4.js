import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';

const Project4 = () => {
  return (
    <div>
      <Navigation />
      <h3>Projet 4</h3>
      <ButtonsBottom left={'/projet-3'} right={'/contact'} />
    </div>
  );
};

export default Project4;