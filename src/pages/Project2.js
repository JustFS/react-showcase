import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';

const Project2 = () => {
  return (
    <div>
      <Navigation />
      <h3>Projet 2</h3>

      <h3>TEST</h3>
      <h3>TEST</h3>
      <h3>TEST</h3>
      <h3>TEST</h3>
      <h3>TEST</h3>
      <h3>TEST</h3>
      <ButtonsBottom left={'/projet-1'} right={'/projet-3'} />
    </div>
  );
};

export default Project2;