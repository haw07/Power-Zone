import "./style.css";
import Data from "./data";
import Footer from "../Components/Footer";
import GetTouch from "../Components/GetTouch";
import { useState } from "react";
import NavBar from "../Components/NavBar";
function Team() {
  const [data, setData] = useState(Data);
  return (
    <section style={{ backgroundColor: "#0a0a0a" }}>
      <NavBar />
      <h1 className="text-white m-auto w-25 mb-3">Our Team</h1>
      <div className="container row m-auto">
        {data.map((trainer) => {
          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="tss-item">
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
      <div className="getTouchContact">
        <GetTouch />
      </div>
      <Footer />
    </section>
  );
}

export default Team;
