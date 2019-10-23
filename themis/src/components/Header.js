import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render() {
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <LinkContainer to="/"><Navbar.Brand className="font-weight-bold">Themis</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/experiments"><Nav.Link>Experiments</Nav.Link></LinkContainer>
          <LinkContainer to="/results"><Nav.Link>Results</Nav.Link></LinkContainer>
          <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
          <LinkContainer to="/signin"><Nav.Link>Sign in</Nav.Link></LinkContainer>
          <LinkContainer to="/signup"><Nav.Link>Sign up</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header;