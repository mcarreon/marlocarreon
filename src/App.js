import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact part="/projects" component={ProjectPage}/>
            //need 404 component
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
