import React from "react";
import "../style.css";
import { Carousel, Nav, Navbar, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="App" style={{ minWidth: "100px" }}>
      <Navbar
        expand="lg"
        variant="transparent"
        fixed="top"
        style={{ zIndex: 1, position: "absolute" }}
        className="navbarContact mainNavbar"
      >
        <Container>
          <Navbar.Brand>
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
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="text-center navHeader"
          >
            <Nav className="">
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
            <div class="buttons_nav">
              <Button class="btn" variant="primary">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button class="btn" variant="primary">
                <Link to="/login">Log In</Link>
              </Button>
            </div>
          </Navbar.Collapse>
          <style type="text/css">
            {`
              /* Styles for the collapsed navbar */
              @media (max-width: 991.98px) {
                .navbar-collapse {
                  background-color: black;
                  padding: 10px;
                  border-radius: 15px;
                  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
                  font-weight: 500;
                  font-family: "Oswald", sans-serif;
                  font-size: 15px;
                }
                .navbar-nav {
                  flex-direction: column;
                }
                .nav-link {
                  color: white !important;
                  font-size: 1.2rem;
                  padding: 10px 0;
                  font-family: 'Open Sans', sans-serif;
                }
                .nav-link:hover {
                  color: #f36100 !important;
                }

                .buttons_nav {
                  display: flex;
                  justify-content: center;
                }

                .btn {
                  margin-right: 15px;
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

                .navbar {
                  display: flex;
                  display-direction: row;
                }
              }
            `}
          </style>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-250 carouselImage"
            src="/hero-1.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text1 font-bold text-2xl mb-5 text-light">
              Shape Your Body
            </h1>
            <h1 className="text font-bold text-6xl mb-3 text-light">
              BE <span className="Strong">STRONG</span>
            </h1>
            <h1 className="text font-bold text-6xl text-light">TRAIN HARD</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-250 carouselImage"
            src="/hero-2.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text1 font-bold text-2xl mb-5 text-light">
              Shape Your Body
            </h1>
            <h1 className="text font-bold text-6xl mb-3 text-light">
              BE <span className="Strong">STRONG</span>
            </h1>
            <h1 className="text font-bold text-6xl text-light">TRAIN HARD</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
