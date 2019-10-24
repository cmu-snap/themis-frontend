import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import routerPropTypes from './routerPropTypes';
import styles from '../styles/Button.module.css';

class Header extends React.Component {
  static propTypes = routerPropTypes;

  render() {
    const background = this.props.location.pathname === '/' ? 'dark' : 'light';
    
    return (
    <Navbar bg={background} expand="lg" variant={background}>
      <NavLink to="/"><Navbar.Brand className="font-weight-semibold">Themis</Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <NavLink to="/experiments" className="font-weight-semibold nav-link">Experiments</NavLink>
          <NavLink to="/results" className="font-weight-semibold nav-link">Results</NavLink>
          <NavLink to="/about" className="font-weight-semibold nav-link">About</NavLink>
          <NavLink to="/signin" className="font-weight-semibold nav-link">Sign in</NavLink>
          <NavLink to="/signup">
            <Button className={styles.signup} variant="outline-primary">Sign up</Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

const HeaderWithRouter = withRouter(Header);
export default HeaderWithRouter;