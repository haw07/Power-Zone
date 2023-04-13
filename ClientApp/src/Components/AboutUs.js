import React from 'react'
import NavBar from './NavBar'
import ChooseUs from './ChooseUs'
import GetTouch from './GetTouch'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function about_us() {
  return (
    <section class="sectionContact overflow-hidden">
      <section
        class="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div class="navbarContact">
          <NavBar />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>About Us</h2>
                <div class="bt-option">
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
      <section class="aboutus-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="about-video">
                        <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" class="play-btn video-popup">
                          <i class="fa-solid fa-caret-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="about-text">
                        <div class="section-title aboutus_title">
                            <span>About Us</span>
                            <h2>What we have done</h2>
                        </div>
                        <div class="at-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div class="about-bar">
                            <div class="ab-item">
                                <p>Body building</p>
                                <div id="bar1" class="barfiller">
                                    <span class="fill b1" data-percentage="80"></span>
                                    <div class="tipWrap">
                                        <span class="tip">80%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ab-item">
                                <p>Training</p>
                                <div id="bar2" class="barfiller">
                                    <span class="fill b2" data-percentage="85"></span>
                                    <div class="tipWrap">
                                        <span class="tip">85%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ab-item">
                                <p>Fitness</p>
                                <div id="bar3" class="barfiller">
                                    <span class="fill b3" data-percentage="75"></span>
                                    <div class="tipWrap">
                                        <span class="tip">75%</span>
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
  )
}

export default about_us