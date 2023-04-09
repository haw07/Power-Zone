import React from "react";
import "../style.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <Navbar
        expand="lg"
        variant="transparent"
        fixed="top"
        style={{ zIndex: 1, position: "relative" }}
      >
        <Container className="m-auto">
          <Navbar.Brand href="#">
            <Link to="/">
              <img
                src="/logo-removebg-preview.png"
                width="130"
                height="130"
                className="d-inline-block align-top ml-auto"
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                exact
                className="nav-link ml-3 mr-3"
                activeClassName="active"
              >
                HOME
              </NavLink>
              <NavLink
                to="/aboutus"
                exact
                className="nav-link ml-3 mr-3"
                activeClassName="active"
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/classes"
                exact
                className="nav-link ml-3 mr-3"
                activeClassName="active"
              >
                CLASSES
              </NavLink>
              <NavLink
                to="/services"
                exact
                className="nav-link ml-3 mr-3"
                activeClassName="active"
              >
                SERVICES
              </NavLink>
              <NavLink
                to="/team"
                exact
                className="nav-link ml-3 mr-3"
                activeClassName="active"
              >
                OUR TEAM
              </NavLink>
              <NavLink
                to="/contact"
                exact
                className="nav-link ml-3 mr-3"
                activeClassName="active"
              >
                CONTACT US
              </NavLink>
            </Nav>
            <Button class="btn" variant="primary">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button class="btn" variant="primary">
              <Link to="/login">Log In</Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
