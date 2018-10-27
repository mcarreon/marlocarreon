import React, { Component, Fragment } from 'react';
import Projects from '../../data/projects.json';

class BookPages extends Component {

  state = {
    projects: Projects
  };

  render() {
    return (<>
      {this.state.projects.map(project => {
        return <article>
          <h4>{project.project_name}</h4>
        </article>
      })}
    </>);
  };
}

export default BookPages;