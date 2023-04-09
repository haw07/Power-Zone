import "./style.css";
import Data from "./data";
import NavBar from '../Components/NavBar'
import GetTouch from '../Components/GetTouch'
import Footer from '../Components/Footer'
import { useState } from "react";
function Team() {
  const [data, setData] = useState(Data);
  return (
    <setion>
      <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
          <div class="navbarContact" >
              <NavBar />
          </div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <div class="breadcrumb-text">
                          <h2>Team</h2>
                          <div class="bt-option">
                              <a href="./index.html">Home</a>
                              <span>Team</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section class="teamIndex">
        <div className="container row m-auto pt-15 teamBox">
          {data.map((trainer) => {
            return (
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="ts-item">
                  <img
                    src={require("../images/team/" + trainer.img)}
                    alt="img"
                    className="img-fluid w-100 h-100"
                  />
                  <div className="ts_text">
                    <h4>{trainer.firstName + " " + trainer.lastName}</h4>
                    <span>{trainer.role}</span>
                    <span id="email">{trainer.email}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <GetTouch />
      <Footer />
    </setion>

  );
}

export default Team;
