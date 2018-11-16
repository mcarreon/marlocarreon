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
import MobilePage from './pages/MobilePage';


  console.log(process.env.PUBLIC_URL);
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0};
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }  

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight})
  }

  
  render() {

    const { height, width} = this.state;
    let mainpage = LandingPage;

    if (height < 900 && width < 500) {
      mainpage = MobilePage;
    }

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={mainpage}/>
            <Route component={ErrorPage} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
