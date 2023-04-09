import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section
      class="footer-section"
      className="bg-black pt-3 text-center"
      style={{ minWidth: "100px" }}
    >
      <div class="container" className="">
        <div class="row pb-3">
          <div class="col-lg-4 col_">
            <div class="fs-about" className="place-content-center">
              <div class="fa-logo">
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
                Management System<p class="p-element">Power Zone</p>
              </p>
              <div class="fa-social">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-envelope fa-envelope-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="fs-widgets">
              <h4 class="h4-1">Useful links</h4>
              <ul class="list">
                <li>
                  <a href="#" class="items">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="items">
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
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="fs-widgets">
              <h4 class="h4-1">Support</h4>
              <ul class="list">
                <li>
                  <Link to="/login" className="items">
                    Log In
                  </Link>
                </li>
                <li>
                  <a href="#" class="items">
                    My account
                  </a>
                </li>
                <li>
                  <a href="#" class="items">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="#" class="items">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 column">
            <div class="fs-widget">
              <h4 class="h4-1">Tips & Guides</h4>
              <div class="fw-recent1" className="text-center">
                <h6>
                  <a href="#" class="h6-1">
                    Physical fitness may help prevent depression, anxiety
                  </a>
                </h6>
                <ul class="list">
                  <li class="item">3 min read</li>
                  <li class="item">20 Comment</li>
                </ul>
              </div>
              <div class="fw-recent">
                <h6>
                  <a href="#" class="h6-1">
                    Fitness: The best exercise to lose belly fat and tone up...
                  </a>
                </h6>
                <ul class="list">
                  <li class="item">3 min read</li>
                  <li class="item">20 Comment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row1">
        <div class="col-lg-12 text-center py-2 pt-4">
          <div class="copyright-text">
            <p>Copyright &copy;2023 All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
