import React from 'react';
import Particles from 'react-particles-js';
import './MobilePage.css';

const MobilePage = () => {
  return (
    <div className="container-fluid m-0 p-0 mobile-container d-flex justify-content-center align-items-center">
      <div className="w-75 p-3 message text-center">Hello! Sorry but the Mobile version of this page is still under construction. Please view it in desktop! Stay tuned for the mobile page.</div>
      <Particles params={{"particles" : {
              "number": {
                "value": 50
              },
              "color": {
                "value": "#000"
              },
              "line_linked": {
                "enable": true,
                "distance": 50,
                "color": "#8390c3",
                "opacity": 0.4,
                "width": 1
              },
              "size": {
                "value": 3
              },
              "move": {
                "direction": "bottom",
                "speed": 2.2,
                "bounce": false,
                "out_mode": "out" 
              }
            }}} width={"100%"} height={"98vh"}className="particles-canvas"/>
    </div>
  );
}

export default MobilePage;