import React from 'react';
import Particles from 'react-particles-js';
import './ParticlesContainer.css';

const ParticlesContainer = props => {
  return (
    <Particles params={props.params} width={"100%"} height={"200vh"}className="particles-canvas"/>
  );
}

export default ParticlesContainer;