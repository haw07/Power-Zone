import React from "react";
import NavBar from "./NavBar";
import ChooseUs from "./ChooseUs";
import GetTouch from "./GetTouch";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function about_us() {
  return (
    <section className="sectionContact overflow-hidden">
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="navbarContact">
          <NavBar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>About Us</h2>
                <div className="bt-option">
                  <Link to="/">Home</Link>
                  <span>About us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ChooseUs />
      </div>
      <section className="aboutus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="about-video">
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <i className="fa-solid fa-caret-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="about-text">
                <div className="section-title aboutus_title">
                  <span>About Us</span>
                  <h2>What we have done</h2>
                </div>
                <div className="at-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                    aliquip ex ea commodo consequat sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="about-bar">
                  <div className="ab-item">
                    <p>Body building</p>
                    <div id="bar1" className="barfiller">
                      <span className="fill b1" data-percentage="80"></span>
                      <div className="tipWrap">
                        <span className="tip">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Training</p>
                    <div id="bar2" className="barfiller">
                      <span className="fill b2" data-percentage="85"></span>
                      <div className="tipWrap">
                        <span className="tip">85%</span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Fitness</p>
                    <div id="bar3" className="barfiller">
                      <span className="fill b3" data-percentage="75"></span>
                      <div className="tipWrap">
                        <span className="tip">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <GetTouch />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default about_us;
