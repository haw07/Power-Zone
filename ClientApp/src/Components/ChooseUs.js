import React from "react";

function ChooseUs() {
  return (
    <section className="choseus-section" style={{ minWidth: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Why to choose us?</span>
              <h2>PUSH YOUR LIMITS FORWARD</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-3 col-sm-6">
            <div className="cs-item">
              <span className="icon-1"></span>
              <h4 className="title">Modern equipment</h4>
              <p>
                Get fit faster with our cutting-edge gym equipment designed to
                help you reach your fitness goals.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-item">
              <span className="icon-2"></span>
              <h4 className="title">Healthy nutrition plan</h4>
              <p>
                Choose our gym and receive a personalized, healthy nutrition
                plan to optimize your fitness journey.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-item">
              <span className="icon-3"></span>
              <h4 className="title">Professional training plan</h4>
              <p>
                Get fit with a custom training plan and expert guidance from our
                team of trainers.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs-item-4">
              <span className="icon-4"></span>
              <h4 className="title">Unique to your needs</h4>
              <p>
                Our gym offers personalized fitness solutions to cater to your
                unique needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
