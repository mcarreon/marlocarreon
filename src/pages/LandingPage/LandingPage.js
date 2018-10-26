import React, { Component } from 'react';
import './LandingPage.css';
import ParticlesContainer from '../../components/ParticlesContainer';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import Mailto from 'react-protected-mailto';
import ProjectTable from '../../components/ProjectTable';
import posed from 'react-pose';

const appearText = posed.div({
  hidden: { color: "#e2fcea" },
  visible: { color: "black" }
});


class LandingPage extends Component {

  state = {
    isVisible: false
  }

  componentDidMount() {
    
  }


  render () {

    const { isVisible } = this.state;

    const name = "Marlo Carreon";

    const heading = "Full-stack web developer based out of Los Angeles. I enjoy backend coding, coffee, and all things javascript.";

    const description = "Hi, I'm Marlo. I was raised an avid gamer thanks to my father, and computers have stuck with me since. Some of my other interests include full-stack pancakes, home cooking, Reddit, foreign beers, making music, and snowboarding. Someday, I would like to program my own video game; but for now I'll keep cooking these stacks.";

    return (
      <Wrapper>
        <div>  
          <Container fluid={"true"} style={{"height": "260vh"}} addclass={"p-0 m-0"}>
            <Row addclass="p-0 m-0 landing-page-row">
              <div className="landing-background">
                <Row addclass={"landing-top p-5 m-0"}> 
                  <Col size="md" col="6" addclass={"pl-5"}>
                    <Container addclass={"landing-header-container"}>
                      <div className="pl-5 pt-3">
                          <div><appearText pose={isVisible ? 'visible' : 'hidden'}><h1 className="name">{name}</h1></appearText></div>
                          <div><h2 className="heading">{heading}</h2></div>
                      </div>
                    </Container>
                  </Col>
                  <Col size="md" col="4" addclass={"offset-md-2"}>
                  <Container addclass="landing-contact-container d-flex justify-content-center align-items-end ml-5">
                    <div className="landing-contact pb-5">
                      <h2 className="pb-2 ">Contact Me</h2>
                      <div className="pb-2"><Mailto email="marloadriancarreon@gmail.com" headers={{subject:"Hello! How are you?"}}/></div>
                      <div className="pb-2 "><a href="https://github.com/mcarreon" target="__blank">GitHub</a></div>
                      <div className="pb-2"><a href="https://www.linkedin.com/in/carryon" target="__blank">LinkedIn</a></div>
                    </div>
                  </Container>
                </Col>
                </Row> 
              </div>
            </Row>     
            <Row addclass="p-0 m-0 about-page-row d-flex justify-content-center align-items-center">
              <div style={{"width": "30%"}} className="pt-2 about-body">
                <h3 className="text-center pb-2">About</h3>
                <p className="description">{description}</p>
              </div>
            </Row>    
            <div className="landing-bot-container">
              <Row addclass="p-0 m-0 projects-page-row">
                <ProjectTable />
              </Row>
            </div>
              
          </Container>
        <ParticlesContainer params={
          {"particles" : {
            "number": {
              "value": 100
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
              "speed": 2,
              "bounce": false,
              "out_mode": "out" 
            }
          }}
        }/>
        </div>
      </Wrapper>
    );
  }
}


export default LandingPage;