import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';

const Project3 = () => {
  return (
    <div>
      <Navigation />
      <h3>Projet 3</h3>
      <ButtonsBottom left={'/projet-2'} right={'/projet-4'} />
    </div>
  );
};

export default Project3;