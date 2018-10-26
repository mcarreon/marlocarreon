import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import posed from 'react-pose';
import FlipPage from 'react-flip-page';
import './Storybook.css';
import $ from 'jquery';

class Storybook extends Component {


  render() {

    const description = "Hi, I'm Marlo. I was raised an avid gamer thanks to my father, and computers have stuck with me since. Some of my other interests include full-stack pancakes, home cooking, Reddit, foreign beers, making music, and snowboarding. Someday, I would like to program my own video game; but for now I'll keep cooking these stacks.";

    const instructions = "This is a flipbook containing all of my projects. To flip the pages, click the left and right sides of the page. The next page has a directory listing all of my projects.";

    $(".storybook-intro-page:parent").addClass("h-100");

    let storybook = (<FlipPage flipOnTouchZone={10} disableSwipe={true} flipOnTouch={true}  loopForever={false} animationDuration={900} orientation={'horizontal'} uncutPages={true} threshold={100} maxAngle={25} responsive={true} style={{"background-color": "#E2FCEA"}} className="storybook"> 
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/profpic.jpg')} className="prof-pic"/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4 className="pb-4 storybook-header">About</h4>
          <p className="storybook-text">{description}</p>
          <p className="storybook-text">{instructions}</p>
        </Col>
      </article>
      <article style={{"background-color": "blue", "height": "100%", "width": "100%"}}><h1>My awesome first article</h1>
    <p>My awesome first content</p></article>
    </FlipPage>);
    
    return (<Container fluid={true} addclass="storybook-container d-flex justify-content-center align-items-center m-0 p-0">{storybook}</Container>);
  }
}

export default Storybook;