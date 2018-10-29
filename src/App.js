import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-table/react-table.css'
import 'jquery';
import 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';


  console.log(process.env.PUBLIC_URL);
class App extends Component {
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route component={ErrorPage} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
