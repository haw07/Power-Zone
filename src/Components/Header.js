import React from "react";
import "../style.css";
import { Carousel, Nav, Navbar, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BroeserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="App" style={{ minWidth: "100px" }}>
      <Navbar
        expand="lg"
        variant="transparent"
        fixed="top"
        style={{ zIndex: 1, position: "absolute" }}
      >
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/logo-removebg-preview.png"
              width="130"
              height="130"
              className="d-inline-block align-top ml-auto"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link ml-3 mr-3" href="#">
                HOME
              </Nav.Link>
              <Nav.Link className="nav-link ml-3 mr-3" href="#">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="nav-link ml-3 mr-3" href="#">
                CLASSES
              </Nav.Link>
              <Nav.Link className="nav-link ml-3 mr-3" href="#">
                SERVICES
              </Nav.Link>
              <Nav.Link className="nav-link ml-3 mr-3" href="#">
                OUR TEAM
              </Nav.Link>
              <Nav.Link className="nav-link ml-3 mr-3" href="#">
                CONTACT US
              </Nav.Link>
            </Nav>
            <Button class="btn mt-1">Sign up</Button> <div></div>
            <Button class="btn mt-1">Log in</Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-250" src="/hero-1.jpg" alt="First slide" />
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
          <img className="d-block w-250" src="/hero-2.jpg" alt="Second slide" />
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
