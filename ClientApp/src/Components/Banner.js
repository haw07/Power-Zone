import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <section class="banner-section set-bg" data-setbg="img/banner-bg.jpg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="bs-text">
              <h2>register now to get more deals</h2>
              <div class="bt-tips">Where health, beauty and fitness meet.</div>
              <Link to="/signup" class="primary-btn btn-normal">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
