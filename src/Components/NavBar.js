import React from "react";
import "../style.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="App">
      <Navbar
        expand="lg"
        variant="transparent"
        fixed="top"
        style={{ zIndex: 1, position: "relative" }}
      >
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/logo-removebg-preview.png"
              width="170"
              height="170"
              className="d-inline-block align-top ml-auto"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <NavLink to="/" exact className="nav-link ml-3 mr-3" activeClassName="active">
                HOME
              </NavLink>
              <NavLink to="/aboutus" exact className="nav-link ml-3 mr-3" activeClassName="active">
                ABOUT US
              </NavLink>
              <NavLink to="/classes" exact className="nav-link ml-3 mr-3" activeClassName="active">
                CLASSES
              </NavLink>
              <NavLink to="/services" exact className="nav-link ml-3 mr-3" activeClassName="active">
                SERVICES
              </NavLink>
              <NavLink to="/team" exact className="nav-link ml-3 mr-3" activeClassName="active">
                OUR TEAM
              </NavLink>
              <NavLink to="/contact" exact className="nav-link ml-3 mr-3" activeClassName="active">
                CONTACT US
              </NavLink>
            </Nav>
            <Button class="btn" variant="primary"><Link to="/signup">Sign Up</Link></Button>
            <Button class="btn" variant="primary"><Link to="/login">Log In</Link></Button>
          </Navbar.Collapse>
          <style type="text/css">
            {`
              /* Styles for the collapsed navbar */
              @media (max-width: 991.98px) {
                .navbar-collapse {
                  background-color: white;
                  padding: 10px;
                  border-radius: 0 0 5px 5px;
                  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
                  font-weight: 500;
                  font-family: "Oswald", sans-serif;
                  font-size: 15px;
                }
                .navbar-nav {
                  flex-direction: column;
                }
                .nav-link {
                  color: black !important;
                  font-size: 1.2rem;
                  padding: 10px 0;
                  font-family: 'Open Sans', sans-serif;
                }
                .nav-link:hover {
                  color: #f36100 !important;
                }
              }

              /* Styles for the expanded navbar */
              @media (min-width: 992px) {
                .navbar-nav {
                  justify-content: space-between;
                }
                .nav-link {
                  color: white;
                  font-size: 1rem;
                  padding: 10px 15px;
                  font-family: 'Roboto', sans-serif;
                  margin-left: 15px;
                }
                .nav-link:hover {
                  color: #f36100 !important;
                }
              }
            `}
          </style>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;