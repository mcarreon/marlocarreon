import React, { Component } from 'react';
import "./Navbar.css";
import posed from 'react-pose';
import Wrapper from '../../components/Wrapper';

const Nav = posed.div({
  closed: { opacity: 0, height: 0},
  open: { opacity: 1}
});

class Navbar extends Component {
  state = { isToggled: false };

  render() {

    const { isToggled } = this.state;

    return (
        <Wrapper className="custom-navbar">
          <div className="text-right" onClick={() => this.setState({isToggled: !isToggled})}><i className="material-icons icon" >menu</i></div>
          <Nav className="navbar-text pt-0" pose={isToggled ? 'open' : 'closed'}>
            <div className="text-right pr-2"><a>Home</a></div>
            <div className="text-right pr-2"><a>Projects</a></div>
          </Nav>
        </Wrapper>
      
      
    );
  }
}

export default Navbar;