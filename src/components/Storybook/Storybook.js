import React, { Component, Fragment } from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import posed from 'react-pose';
import FlipPage from 'react-flip-page';
import './Storybook.css';
import Projects from '../../data/projects.json';
import $ from 'jquery';
import { GoArrowRight, GoArrowLeft, GoBook } from 'react-icons/go'; 
import Moment from 'react-moment';
import BookPages from '../../components/BookPages';
import TextFit from 'react-textfit';
import Fade from 'react-reveal/Fade';

class Storybook extends Component {
  
  state = {
    projects: Projects.filter(project => project.show === true).reverse(),
    flipping: false
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

  render() {

    

    const { projects } = this.state;

    const description = "Hi, I'm Marlo. I was raised an avid gamer thanks to my father, and computers have stuck with me since. Some of my other interests include full-stack pancakes, home cooking, Reddit, foreign beers, making music, and snowboarding. Someday, I would like to program my own video game; but for now I'll keep cooking these stacks.";

    const instructions = "This is a flipbook containing all of my projects. To flip the pages, click the left and right arrows on the sides of the page. Book in the bottom right leads to the table of contents.";

    let storybook = (<FlipPage flipOnTouchZone={0} disableSwipe={true} flipOnTouch={true} loopForever={false} animationDuration={650} orientation={'horizontal'} uncutPages={true} threshold={0} maxAngle={25} responsive={true} className="storybook h-75" ref={(component) => { this.flipPage = component }}> 
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/profpic.jpg')} alt="" className="prof-pic p-3"/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 h-100 pb-5">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => { this.flipPage.gotoNextPage() }}/></div>
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
            <h4 className="pb-0 storybook-header toc">Table Of Contents</h4>
            <p className="subheader pb-3">Skip to projects with these links.</p>
            {projects.map((project, i) => {
              return (
              <div><h5 className="toc-button" onClick={() => {this.flipPage.gotoPage(i + 2)}}>       
              {project.project_name}
            </h5></div>);
            })}
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left"  onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[0].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[0].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[0].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[0].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[0].project_link}>Repository</a> | <a href={projects[0].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[0].project_desc}</p>
            <div>{projects[0].project_tags !== null ? `Tags: ${projects[0].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[1].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[1].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[1].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[1].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[1].project_link}>Repository</a> | <a href={projects[1].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[1].project_desc}</p>
            <div>{projects[1].project_tags !== null ? `Tags: ${projects[1].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[2].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[2].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[2].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[2].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[2].project_link}>Repository</a> | <a href={projects[2].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[2].project_desc}</p>
            <div>{projects[2].project_tags !== null ? `Tags: ${projects[2].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[3].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[3].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[3].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[3].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[3].project_link}>Repository</a> | <a href={projects[3].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[3].project_desc}</p>
            <div>{projects[3].project_tags !== null ? `Tags: ${projects[3].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[4].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[4].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[4].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[4].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[4].project_link}>Repository</a> | <a href={projects[4].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[4].project_desc}</p>
            <div>{projects[4].project_tags !== null ? `Tags: ${projects[4].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[5].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[5].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[5].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[5].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[5].project_link}>Repository</a> | <a href={projects[5].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[5].project_desc}</p>
            <div>{projects[5].project_tags !== null ? `Tags: ${projects[5].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[6].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[6].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[6].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[6].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[6].project_link}>Repository</a> | <a href={projects[6].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[6].project_desc}</p>
            <div>{projects[6].project_tags !== null ? `Tags: ${projects[6].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[7].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          {/* <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div> */}
          <div className="d-flex flex-column justify-content-center h-100">
            <h4 className="storybook-header">{projects[7].project_name}</h4>
            <h5><Moment format="YYYY/DD/MM">{projects[7].project_creation_date}</Moment></h5>
            <h5 className="storybook-font-light">{projects[7].project_type}</h5>
            <div className="storybook-project-links pb-4"><a href={projects[7].project_link}>Repository</a> | <a href={projects[7].project_host}>Visit the site</a></div>
            <p className="storybook-project-desc pb-4">{projects[7].project_desc}</p>
            <div>{projects[7].project_tags !== null ? `Tags: ${projects[7].project_tags}` : ''}</div>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
    </FlipPage>);
    
    return (<Container fluid={"true"} addclass="storybook-container d-flex justify-content-center align-items-center ml-auto mr-auto p-0 w-75 h-100">{storybook}</Container>);
  }
}

export default Storybook;