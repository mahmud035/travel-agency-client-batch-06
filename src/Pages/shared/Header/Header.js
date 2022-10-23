import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

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
            <>
              {user?.email ? (
                <>
                  <Link to="/login">
                    <Button onClick={handleLogOut} variant="info">
                      Log Out
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="success">Login</Button>
                  </Link>
                  &nbsp;
                  <Link to="/sign-up">
                    <Button variant="info">Sign up</Button>
                  </Link>
                </>
              )}
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
