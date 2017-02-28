import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">ES6 Resource</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            By Andrew Patipaksiri
          </Navbar.Text>
          <Navbar.Text pullRight>
            Select a topic below to learn
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default NavBar;
