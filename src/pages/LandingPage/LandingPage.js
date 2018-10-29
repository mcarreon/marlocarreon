import React, { Component } from 'react';
import './LandingPage.css';
import ParticlesContainer from '../../components/ParticlesContainer';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import Mailto from 'react-protected-mailto';
import Storybook from '../../components/Storybook';
import Fade from 'react-reveal/Fade';
class LandingPage extends Component {


  componentDidMount() {
    
  }


  render () {

    const name = "Marlo Carreon";

    const heading = "Full-stack web developer based out of Los Angeles. I enjoy backend coding, coffee, and all things javascript.";

    

    return (
      <Wrapper>
        <div>  
          <Container fluid={"true"} style={{"height": "220vh"}} addclass={"p-0 m-0"}>
            <Row addclass="p-0 m-0 landing-page-row">
              <div className="landing-background">
                <Row addclass={"landing-top p-5 m-0"}> 
                  <Col size="md" col="6" addclass={"pl-5"}>
                    <Container addclass={"landing-header-container"}>
                      <div className="pl-3 pt-3 title-container">
                          <Fade clear><h1 className="name">{name}</h1></Fade>
                          <Fade clear><h2 className="heading">{heading}</h2></Fade>
                      </div>
                    </Container>
                  </Col>
                  <Col size="md" col="4" addclass={"offset-md-2"}>
                  <Container addclass="landing-contact-container d-flex justify-content-center align-items-end ml-5">
                  <Fade clear><div className="pl-4 landing-contact pb-5">
                      <h2 className="pb-2 ">Contact Me</h2>
                      <div className="pb-2 email"><Mailto className="email" email="marloadriancarreon@gmail.com" headers={{subject:"Hello! How are you?"}}/></div>
                      <div className="pb-2 github"><a href="https://github.com/mcarreon" target="__blank">GitHub</a></div>
                      <div className="pb-2 linkedin"><a href="https://www.linkedin.com/in/carryon" target="__blank">LinkedIn</a></div>
                    </div></Fade>
                  </Container>
                </Col>
                </Row> 
              </div>
            </Row>     
            <Row addclass="p-0 m-0 about-page-row d-flex justify-content-center align-items-center">
              <div className="pt-2 about-body">
              </div>
            </Row>    
            <div className="landing-bot-container">
              <Row addclass="p-0 m-0 projects-page-row">
                <Storybook />
                {/* <ProjectTable />  */}
              </Row>
            </div>
            <ParticlesContainer params={
            {"particles" : {
              "number": {
                "value": 150
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
            }}}/>
          </Container>
        </div>
      </Wrapper>
    );
  }
}


export default LandingPage;