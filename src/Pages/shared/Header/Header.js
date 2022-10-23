import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navbar-brand">
            Traveler
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav-items">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Home
              </NavLink>
              <NavLink to="/trip">Trip</NavLink>
              <NavLink to="/category">Category</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
            </Nav>
            <Nav>
              <Link to="/login">
                <Button variant="success">Login</Button>
              </Link>
              &nbsp;
              <Link to="/sign-up">
                <Button variant="info">Sign up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
