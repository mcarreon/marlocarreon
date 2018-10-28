import React, { Component, Fragment } from 'react';
import Col from '../../components/Col';
import { GoArrowRight, GoArrowLeft, GoBook } from 'react-icons/go'; 

class BookPages extends Component {

  state = {
    projects: this.props.projects
  };

  render() {

    const { projects } = this.state;

    return (
      <article className="p-5 d-flex h-100 flex-row storybook-intro-page">
        <Col col="6" addclass="pr-5 border-right h-100">
          <div><GoArrowLeft size="3rem" className="page-back float-left" onClick={() => {this.flipPage.gotoPreviousPage()}}/></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src={require('../../data/projects/' + projects[this.props.projectNumber].project_preview)} alt="" className='proj-pic p-3'/>
          </div>
        </Col>
        <Col col="6" addclass="pl-5 pb-5 h-100">
          <div><GoArrowRight size="3rem" className="page-forward float-right" onClick={() => {this.flipPage.gotoNextPage()}}/></div>
          <div className="d-flex flex-column justify-content-center h-100">
            <h4>{projects[this.props.projectNumber].project_name}</h4>
          </div>
          <div><GoBook size="3rem" className="page-contents float-right" onClick={() => {this.flipPage.gotoPage(1)}}/></div>
        </Col>
      </article>
    );
  };
}

export default BookPages;