import React, { Component, Fragment } from 'react';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import posed from 'react-pose';
import FlipPage from 'react-flip-page';
import './Storybook.css';
import Projects from '../../data/projects.json';
import BookPages from '../../components/BookPages';
import ParticlesContainer from '../../components/ParticlesContainer';
import $ from 'jquery';
import { GoArrowRight, GoArrowLeft, GoBook } from 'react-icons/go'; 

class Toc extends Component {
  state = {
    projects: Projects.filter(project => project.show === true).reverse()
  }

  componentDidMount = () => {
    $('.toc-button').addClass("toc-button-invisible").removeClass("toc-button-visible");
  };
  
  render() {

    const { projects } = this.state;

    


    return <Fragment>
      
    </Fragment>
  }
}

class Storybook extends Component {
  
  state = {
    projects: Projects.filter(project => project.show === true).reverse()
  }

  render() {

    const { projects } = this.state;

    const description = "Hi, I'm Marlo. I was raised an avid gamer thanks to my father, and computers have stuck with me since. Some of my other interests include full-stack pancakes, home cooking, Reddit, foreign beers, making music, and snowboarding. Someday, I would like to program my own video game; but for now I'll keep cooking these stacks.";

    const instructions = "This is a flipbook containing all of my projects. To flip the pages, click the left and right sides of the page. The next page has a directory listing all of my projects.";

    let storybook = (<FlipPage flipOnTouchZone={0} disableSwipe={true} flipOnTouch={true}  loopForever={false} animationDuration={700} orientation={'horizontal'} uncutPages={true} threshold={0} maxAngle={25} responsive={true} className="storybook h-75" ref={(component) => { this.flipPage = component; }}> 
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/profpic.jpg')} alt="" className="prof-pic p-3"/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 h-100 pb-5">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="flex-column justify-content-center d-flex h-100">
            <h4 className="pb-4 storybook-header">About</h4>
            <p className="storybook-text">{description}</p>
            <p className="storybook-text">{instructions}</p>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="pb-4 storybook-header toc">Table Of Contents</h4>
            {projects.map((project, i) => {
              return (
              <div><button className="toc-button toc-button-invisible" onClick={() => {this.flipPage.gotoPage(i + 2)}}>       
              {project.project_name}
            </button></div>);
            })}
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[0].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4>{projects[0].project_name}</h4>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[1].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[1].project_name}</h4>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[2].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[2].project_name}</h4>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[3].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[3].project_name}</h4>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[4].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[4].project_name}</h4>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[5].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[5].project_name}</h4>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[6].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[6].project_name}</h4>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right d-flex justify-content-center align-items-center h-100">
          <img src={require('../../data/projects/' + projects[7].project_preview)} alt="" className='proj-pic p-3'/>
        </Col>
        <Col col="6" addclass="d-flex pl-5 flex-column justify-content-center h-100">
          <h4>{projects[7].project_name}</h4>
        </Col>
      </article>
      
    </FlipPage>);
    
    return (<Container fluid={true} addclass="storybook-container d-flex justify-content-center align-items-center ml-auto mr-auto p-0 w-75 h-100">{storybook}</Container>);
  }
}

export default Storybook;