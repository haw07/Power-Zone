import React from 'react';
import '../style.css'
import {Carousel, Nav, Navbar, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='App'>
      <Navbar expand="lg" variant="transparent" fixed="top" style={{ zIndex: 1, position: 'absolute'}}>
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
            <FontAwesomeIcon icon={faBars} style={{color: 'white'}}/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className='nav-link ml-3 mr-3' href="#">HOME</Nav.Link>
              <Nav.Link className='nav-link ml-3 mr-3' href="#">ABOUT US</Nav.Link>
              <Nav.Link className='nav-link ml-3 mr-3' href="#">CLASSES</Nav.Link>
              <Nav.Link className='nav-link ml-3 mr-3' href="#">SERVICES</Nav.Link>
              <Nav.Link className='nav-link ml-3 mr-3' href="#">OUR TEAM</Nav.Link>
              <Nav.Link className='nav-link ml-3 mr-3' href="#">CONTACT US</Nav.Link>
            </Nav>
            <Button class="btn">Sign up</Button>{' '}
            <div></div>
            <Button class="btn">Log in</Button>{' '}
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
                  margin-left: 35px;
                }
                .nav-link:hover {
                  color: #f36100 !important;
                }
              }
            `}
          </style>
        </Container>
      </Navbar>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-250"
            src="/hero-1.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="text1 font-bold text-2xl mb-5 text-light">Shape Your Body</h1>
            <h1 className="text font-bold text-6xl mb-3 text-light">
              BE <span className="Strong">STRONG</span>
            </h1>
            <h1 className="text font-bold text-6xl text-light">TRAIN HARD</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-250"
            src="/hero-2.jpg"
            alt="Second slide"
          />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text1 font-bold text-2xl mb-5 text-light">Shape Your Body</h1>
              <h1 className="text font-bold text-6xl mb-3 text-light">
                BE <span className="Strong">STRONG</span>
              </h1>
              <h1 className="text font-bold text-6xl text-light">TRAIN HARD</h1>
            </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Header