import React, { Component } from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import FlipPage from 'react-flip-page';
import './Storybook.css';
import Projects from '../../data/projects.json';
import { GoArrowRight, GoArrowLeft, GoBook } from 'react-icons/go'; 
import Moment from 'react-moment';

class Storybook extends Component {
  
  state = {
    projects: Projects.filter(project => project.show === true).reverse(),
    flippable: true
  }

  // attempt to fix double button press issue
  // restrictPage = (func) => {
  //   if (!this.state.flipping) {
  //     this.setState({flipping: true});
  //     func == null ? console.log('true') : console.log(func());
      
  //     setTimeout(() => {
  //       this.setState({flipping: false});
  //     }, 650);
  //   } else {

  //   }
  // }

  gotoNextPage = () => {
    if (this.state.flippable) {
      this.setState({flippable: false});
      this.flipPage.gotoNextPage();
    }
  
  }

  gotoPreviousPage = () => {
    if (this.state.flippable) {
      this.setState({flippable: false});
      this.flipPage.gotoPreviousPage();
    }
    
  }

  gotoTofC = () => {
    this.flipPage.gotoPage(1);
  }


  render() {

    //TODO: Pages hardcoded due to rendering issues - find a cleaner solution
    //TODO: wrap navigation buttons with icons

    const { projects } = this.state;

    const description = "Hi, I'm Marlo. I was raised an avid gamer thanks to my father, and (hopefully) a good cook thanks to my mother. Some of my other interests include full-stack pancakes, home cooking, Reddit, foreign beers, making music, and snowboarding. Someday, I would like to program my own video game; but for now I'll keep cooking these stacks.";

    const instructions = "This is a flipbook containing all of my projects. To flip the pages, click the left and right arrows on the sides of the page. Book in the bottom right leads to the table of contents.";

    let storybook = (<FlipPage flipOnTouchZone={0} disableSwipe={true} flipOnTouch={true} loopForever={false} animationDuration={650} orientation={'horizontal'} uncutPages={true} threshold={0} maxAngle={25} responsive={true} className="storybook h-75" ref={(component) => { this.flipPage = component }}> 
      {/*About*/}
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div className="d-flex justify-content-center align-items-center h-100 m-3">
            <img src={require('../../data/profpic.jpg')} alt="" className="prof-pic p-3"/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 h-100 pb-5">
          <div><button className="page-forward float-right" onClick={() => { this.flipPage.gotoNextPage() }}><GoArrowRight size="3rem" /></button></div>
            <div className="flex-column justify-content-center d-flex h-100">
              <h4 className="pb-1 storybook-header">About</h4>
              <p className="storybook-text">{description}</p>
            </div>
          <div><button className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}><GoBook size="3rem" /></button></div>
        </Col>
      </article>
      {/*Table of Contents*/}
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="border-right h-100">
          <div><button className="page-back float-left instructions-left" onClick={() => {this.flipPage.gotoPreviousPage()}}><GoArrowLeft size="3rem" /></button></div>
          <div className="h-100 d-flex justify-content-center align-items-center float-none instructions">
            <p className="storybook-text w-75">{instructions}</p>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><button className="page-forward float-right" onClick={() => { this.flipPage.gotoNextPage() }}><GoArrowRight size="3rem" /></button></div>
          <div className="d-flex flex-column justify-content-center h-100 pt-5">
            <h4 className="pb-0 storybook-header toc">Table Of Contents</h4>
            <p className="subheader pb-3">Skip to projects with these links.</p>
            {projects.map((project, i) => {
              return (
              <div><h5 className="toc-button" onClick={() => {this.flipPage.gotoPage(i + 2)}}>       
              {project.project_name}
            </h5></div>);
            })}
          </div>
          <div><button className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}><GoBook size="3rem" /></button></div>
        </Col>
      </article>
      {/*Page 1*/ }
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><button className="page-back float-left instructions-left" onClick={() => {this.flipPage.gotoPreviousPage()}}><GoArrowLeft size="3rem" /></button></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[0].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><button className="page-forward float-right" onClick={() => { this.flipPage.gotoNextPage() }}><GoArrowRight size="3rem" /></button></div>
          <div className="d-flex flex-column justify-content-center h-100 pt-5">
            <h4 className="storybook-header"><a href={projects[0].project_host}>{projects[0].project_name}</a></h4>
            <h5><Moment format="YYYY/DD/MM">{projects[0].project_creation_date}</Moment></h5>
            <div className="storybook-project-links pb-4"><a href={projects[0].project_link} target="__blank">Repository</a> | <a href={projects[0].project_host} target="__blank">Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[0].project_desc}</p>
            <p className="storybook-project-desc">{projects[0].project_technology !== null ? `${projects[0].project_technology}` : ''}</p>
          </div>
          <div><button className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}><GoBook size="3rem" /></button></div>
        </Col>
      </article>
      {/*Page 2*/ }
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><button className="page-back float-left instructions-left" onClick={() => {this.flipPage.gotoPreviousPage()}}><GoArrowLeft size="3rem" /></button></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[1].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><button className="page-forward float-right" onClick={() => { this.flipPage.gotoNextPage() }}><GoArrowRight size="3rem" /></button></div>
          <div className="d-flex flex-column justify-content-center h-100 pt-5">
            <h4 className="storybook-header">{projects[1].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[1].project_creation_date}</Moment></h5>
            <div className="storybook-project-links pb-4"><a href={projects[1].project_link} target="__blank">Repository</a> | <a href={projects[1].project_host} target="__blank">Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[1].project_desc}</p>
            <p className="storybook-project-desc">{projects[0].project_technology !== null ? `${projects[0].project_technology}` : ''}</p>
          </div>
          <div><button className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}><GoBook size="3rem" /></button></div>
        </Col>
      </article>
      {/*Page 3*/ }
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><button className="page-back float-left instructions-left" onClick={() => {this.flipPage.gotoPreviousPage()}}><GoArrowLeft size="3rem" /></button></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[2].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          {/* <div><button className="page-forward float-right" onClick={() => { this.flipPage.gotoNextPage() }}><GoArrowRight size="3rem" /></button></div> */}
          <div className="d-flex flex-column justify-content-center h-100 pt-5">
            <h4 className="storybook-header">{projects[2].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[2].project_creation_date}</Moment></h5>
            <div className="storybook-project-links pb-4"><a href={projects[2].project_link} target="__blank">Repository</a> | <a href={projects[2].project_host} target="__blank">Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[2].project_desc}</p>
            <p className="storybook-project-desc">{projects[0].project_technology !== null ? `${projects[0].project_technology}` : ''}</p>
          </div>
          <div><button className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}><GoBook size="3rem" /></button></div>
        </Col>
      </article>
    </FlipPage>);
    
    return (<Container fluid={"true"} addclass="storybook-container d-flex justify-content-center align-items-center ml-auto mr-auto p-0 w-75 h-100">{storybook}</Container>);
  }
}

export default Storybook;