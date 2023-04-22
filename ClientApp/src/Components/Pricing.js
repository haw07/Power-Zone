import React from "react";
import { Link } from "react-router-dom";
function Pricing() {
  return (
    <section className="pricing-section spad" style={{ minwidth: "100px" }}>
      <div className="container">
        <div className="row_1">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Our Plan</span>
              <h2>Choose your pricing plan</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="ps-item">
              <h3>className drop-in</h3>
              <div className="pi-price">
                <h2>$ 39.0</h2>
                <span>SINGLE className</span>
              </div>
              <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classNamees</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
              </ul>
              <Link className="primary-btn pricing-btn" to="/signup">
                Enroll now
              </Link>
              <a href="#" className="thumb-icon">
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="ps-item">
              <h3>12 Month unlimited</h3>
              <div className="pi-price">
                <h2>$ 99.0</h2>
                <span>SINGLE className</span>
              </div>
              <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classNamees</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
              </ul>
              <Link className="primary-btn pricing-btn" to="/signup">
                Enroll now
              </Link>

              <a href="#" className="thumb-icon">
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="ps-item">
              <h3>6 Month unlimited</h3>
              <div className="pi-price">
                <h2>$ 59.0</h2>
                <span>SINGLE className</span>
              </div>
              <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classNamees</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
              </ul>
              <Link className="primary-btn pricing-btn" to="/signup">
                Enroll now
              </Link>
              <a href="#" className="thumb-icon">
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
