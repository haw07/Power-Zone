import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section
      className="footer-section bg-black pt-3 text-center"
      style={{ minWidth: "100px" }}
    >
      <div className="container">
        <div className="row pb-3">
          <div className="col-lg-4 col_">
            <div className="fs-about place-content-center">
              <div className="fa-logo">
                <a href="#">
                  <img
                    height="140"
                    width="140"
                    src="/logo-removebg-preview.png"
                    alt="logo"
                  />
                </a>
              </div>
              <p>
                Transforming Your Fitness Journey with Smart Management - Gym
                Management System<p className="p-element">Power Zone</p>
              </p>
              <div className="fa-social">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-solid fa-envelope fa-envelope-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="fs-widgets">
              <h4 className="h4-1">Useful links</h4>
              <ul className="list">
                <li>
                  <Link to="/aboutus" className="items">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#" className="items">
                    Blog
                  </a>
                </li>
                <li>
                  <Link to="/classes" className="items">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="items">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="fs-widgets">
              <h4 className="h4-1">Support</h4>
              <ul className="list">
                <li>
                  <Link to="/login" className="items">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="items">
                    My account
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="items">
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="items">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 column">
            <div className="fs-widget">
              <h4 className="h4-1">Tips & Guides</h4>
              <div className="fw-recent1 text-center">
                <h6>
                  <a href="#" className="h6-1">
                    Physical fitness may help prevent depression, anxiety
                  </a>
                </h6>
                <ul className="list">
                  <li className="item">3 min read</li>
                  <li className="item">20 Comment</li>
                </ul>
              </div>
              <div className="fw-recent">
                <h6>
                  <a href="#" className="h6-1">
                    Fitness: The best exercise to lose belly fat and tone up...
                  </a>
                </h6>
                <ul className="list">
                  <li className="item">3 min read</li>
                  <li className="item">20 Comment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row1">
        <div className="col-lg-12 text-center py-2 pt-4">
          <div className="copyright-text">
            <p>Copyright &copy;2023 All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
