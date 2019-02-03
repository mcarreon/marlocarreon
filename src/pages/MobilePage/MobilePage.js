import React, { Component } from 'react';

import './css/MobilePage.css';

class MobilePage extends Component {

  render () {
  
  
  
    return (
      <div className="mobile-body">
        <section className="mobile-landing-bg">
          <div className="mobile-landing">
            <div>
              <img src="" />
            </div>
            <div className="mobile-title">
              <h1>Marlo Carreon</h1>
              <h2>Full Stack Developer</h2>
              <p>Based out of Los Angeles. I enjoy backend coding, coffee, and all things Javascript.</p>
            </div>
            <div className="mobile-contact">
              <h2>Get in Touch</h2>
              <ul>
                <li>marloadriancarreon@gmail.com</li>
                <li><a>Resume</a></li>
              </ul>
              <div className="mobile-icons">
                <a><img /></a>
                <a><img /></a>
              </div>
            </div>
          </div>
        </section>
  
        <div className="mobile-alternate-bg">
          <div>
            <img />
          </div>
          <h3>Blitz Report</h3>
          <p>A Fantasy Football utility webapp that allows users to track QB success rates against specific opponents. </p>
          <h4>Technology</h4>
          <p>Blitz Report is built with React, with a Node and Mongoose back end. Routing was handled with Express, user authentication is handled with Passport/Bcrypt, and Styling was done with the Bootstrap CSS Framework. </p>
        </div>
        
        <div>
          <div>
            <img />
          </div>
          <h3>Van Cool</h3>
          <p>A web app to assist companies in creating and managing carpools.</p>
          <h4>Technology</h4>
          <p>Van Cool was built using Handlebars to serve the front end and Express to handle routing. The back end uses Sequelize with our MySQL database and Passport to handle user authentication.</p>
        </div>
  
        <footer>
          <p>2019, Marlo Carreon</p>
        </footer>
  
  
      </div>
    );
  }

} 

export default MobilePage;