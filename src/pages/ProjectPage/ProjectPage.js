import React, { Component } from 'react';
import './ProjectPage.css';
import Container from '../../components/Container';
import Projects from '../../data/projects.json';
import ReactTable from 'react-table';
import Moment from 'react-moment';

class ProjectPage extends Component {
  state = {
    projects: Projects.reverse()
  };

  render () {
    

    const data = this.state.projects;
    
    const subColumns = [{
        Header: "Date",
        id: 'project_creation_date',
        accessor: p => p.project_creation_date,
        Cell: props => <span><Moment format="YYYY/DD/MM">{props.value}</Moment></span>,
        minWidth: 115
      },{
        Header: "Type",
        id: 'project_type',
        accessor: p => p.project_type,
        minWidth: 150
      }, {
        Header: "Name",
        id: 'project_name',
        accessor: p => p.project_name,
        minWidth: 200
      }, {
        Header: "Link",
        id: "project_link",
        accessor: p => p.project_host,
        Cell: props => <span className="project-link"><a href={props.value} target="__blank">Link</a></span>,
        
      }, {
        Header: "Project Description",
        id: "project_desc",
        accessor: p => p.project_desc,
        minWidth: 600,
        resizable: true,
        className: 'project-desc'
      }, {
        Header: "Tags",
        id: "project_tags",
        accessor: p => p.project_tags,
        minWidth: 200
      }
    ];

    const columns = [{
      Header: () => <span><h1>Projects</h1></span>,
      columns: subColumns,
      headerClassName: 'pt-3 pb-2'
    }];

    


    return (
      <Container addclass="project-container d-flex justify-content-center align-items-center">
        <ReactTable data={data} columns={columns} sortable={false} defaultPageSize={15} pageSizeOptions={[5, 10, 15]} className="-striped -highlight"/>
      </Container>
    );
  }
}


export default ProjectPage;