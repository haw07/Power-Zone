import NavBar from "../Components/NavBar";
import GetTouch from "../Components/GetTouch";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Team() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7105/api/Coach")
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <section className="overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
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
                <h2>Contact Us</h2>
                <div class="bt-option">
                  <Link to="/">Home</Link>
                  <span>Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-white m-auto w-60 mb-3 teamtext">Our Team</h1>
      <div className="container row m-auto">
        {data.map((trainer) => {
          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="tss-item">
                <img
                  src={trainer.img}
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
      <div className="getTouchContact">
        <GetTouch />
      </div>
      <Footer />
    </section>
  );
}

export default Team;
