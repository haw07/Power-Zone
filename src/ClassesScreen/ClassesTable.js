import Data from "./data";
import "./Classes_style.css";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import GetTouch from "../Components/GetTouch";
import Footer from "../Components/Footer";

function ClassesTable() {
  const [data, setData] = useState(Data);
  const filter = (type, id) => {
    const ids = ["classes", "cros", "ball", "pp", "walls", "candy"];
    let d = Data;
    if (type !== "all")
      d = Data.filter((cl) => {
        return cl.class === type;
      });
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] !== id) {
        document.getElementById(ids[i]).style.color = "white";
      }
    }
    document.getElementById(id).style.color = "#e4381c";
    setData(d);
  };
  useEffect(() => {
    document.getElementById("classes").style.color = "#e4381c";
    document.getElementById("cros").style.color = "white";
    document.getElementById("pp").style.color = "white";
    document.getElementById("ball").style.color = "white";
    document.getElementById("walls").style.color = "white";
    document.getElementById("candy").style.color = "white";
  }, []);
  //this function returns the expression that has the startTime and the endTime
  const filterForSE = (day, startTime, isAfter8 = false) => {
    const d = data.filter((cl) => {
      if (isAfter8)
        return (
          cl.day === day &&
          (cl.startTime === startTime || cl.startTime > startTime)
        );
      else {
        return cl.day === day && cl.startTime === startTime;
      }
    });
    //the there is a data
    if (d[0]) {
      return d[0]["startTime"] + " - " + d[0]["endTime"];
    } else return "";
  };
  //this function returns the expression that has the class type
  const filterForClass = (day, startTime, isAfter8 = false) => {
    const d = data.filter((cl) => {
      if (isAfter8)
        return (
          cl.day === day &&
          (cl.startTime === startTime || cl.startTime > startTime)
        );
      else {
        return cl.day === day && cl.startTime === startTime;
      }
    });
    //if there is a data
    if (d[0]) return d[0]["class"];
    else return "";
  };
  return (
    <section className="classtime-section class-time-table spad">
      <section
        class="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div class="navbarClasses">
          <NavBar />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Classes</h2>
                <div class="bt-option">
                  <a href="./index.html">Home</a>
                  <span>Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>Classtime Table</h2>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light text-center mb-2">
          <div className="container-fluid" style={{ marginLeft: "12rem" }}>
            <button
              className="navbar-toggler bg-white text-center m-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{ marginLeft: "4rem" }}
            >
              <div className="navbar-nav" id="nav">
                <a
                  onClick={() => filter("all", "classes")}
                  className=" nav-link me-5 fw-bold"
                  aria-current="page"
                  href="#"
                  id="classes"
                >
                  All Classes
                </a>
                <a
                  onClick={() => filter("crossfit", "cros")}
                  className="nav-link me-5 fw-bold"
                  href="#"
                  id="cros"
                >
                  CROSSFIT
                </a>
                <a
                  onClick={() => filter("launge ball", "ball")}
                  className="nav-link me-5 fw-bold"
                  href="#"
                  id="ball"
                >
                  LAUNGE BALL
                </a>
                <a
                  onClick={() => filter("ppsr", "pp")}
                  className="nav-link me-5 fw-bold"
                  href="#"
                  id="pp"
                >
                  PPSR
                </a>
                <a
                  onClick={() => filter("walls", "walls")}
                  className="nav-link me-5 fw-bold "
                  href="#"
                  id="walls"
                >
                  WALLS
                </a>
                <a
                  onClick={() => filter("candy", "candy")}
                  className="nav-link me-5 fw-bold"
                  href="#"
                  id="candy"
                >
                  CANDY
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="classtime-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="workout-time">10:00</td>
                  <td
                    id="m-1"
                    className={
                      "ts-item" +
                      (filterForSE("Monday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Monday", "10:00")}</span>
                    <h6>{filterForClass("Monday", "10:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Tuesday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Tuesday", "10:00")}</span>
                    <h6>{filterForClass("Tuesday", "10:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Wednesday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Wednesday", "10:00")}</span>
                    <h6>{filterForClass("Wednesday", "10:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Thursday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Thursday", "10:00")}</span>
                    <h6>{filterForClass("Thursday", "10:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Friday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Friday", "10:00")}</span>
                    <h6>{filterForClass("Friday", "10:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Saturday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Saturday", "10:00")}</span>
                    <h6>{filterForClass("Saturday", "10:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Sunday", "10:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Sunday", "10:00")}</span>
                    <h6>{filterForClass("Sunday", "10:00")}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="workout-time">14:00</td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Monday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Monday", "14:00")}</span>
                    <h6>{filterForClass("Monday", "14:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Tuesday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Tuesday", "14:00")}</span>
                    <h6>{filterForClass("Tuesday", "14:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Wednesday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Wednesday", "14:00")}</span>
                    <h6>{filterForClass("Wednesday", "14:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Thursday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Thursday", "14:00")}</span>
                    <h6>{filterForClass("Thursday", "14:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Friday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Friday", "14:00")}</span>
                    <h6>{filterForClass("Friday", "14:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Saturday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Saturday", "14:00")}</span>
                    <h6>{filterForClass("Saturday", "14:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Sunday", "14:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Sunday", "14:00")}</span>
                    <h6>{filterForClass("Sunday", "14:00")}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="workout-time">16:00</td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Monday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Monday", "16:00")}</span>
                    <h6>{filterForClass("Monday", "16:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Tuesday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Tuesday", "16:00")}</span>
                    <h6>{filterForClass("Tuesday", "16:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Wednesday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Wednesday", "16:00")}</span>
                    <h6>{filterForClass("Wednesday", "16:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Thursday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Thursday", "16:00")}</span>
                    <h6>{filterForClass("Thursday", "16:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Friday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Friday", "16:00")}</span>
                    <h6>{filterForClass("Friday", "16:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Saturday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Saturday", "16:00")}</span>
                    <h6>{filterForClass("Saturday", "16:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Sunday", "16:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Sunday", "16:00")}</span>
                    <h6>{filterForClass("Sunday", "16:00")}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="workout-time">18:00</td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Monday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Monday", "18:00")}</span>
                    <h6>{filterForClass("Monday", "18:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Tuesday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Tuesday", "18:00")}</span>
                    <h6>{filterForClass("Tuesday", "18:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Wednesday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Wednesday", "18:00")}</span>
                    <h6>{filterForClass("Wednesday", "18:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Thursday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Thursday", "18:00")}</span>
                    <h6>{filterForClass("Thursday", "18:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Friday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Friday", "18:00")}</span>
                    <h6>{filterForClass("Friday", "18:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Saturday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Saturday", "18:00")}</span>
                    <h6>{filterForClass("Saturday", "18:00")}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Sunday", "18:00") ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Sunday", "18:00")}</span>
                    <h6>{filterForClass("Sunday", "18:00")}</h6>
                  </td>
                </tr>
                <tr>
                  <td className="workout-time">20:00</td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Monday", "20:00", true) ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Monday", "20:00", true)}</span>
                    <h6>{filterForClass("Monday", "20:00", true)}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Tuesday", "20:00", true) ? " hover-bg" : "")
                    }
                    data-tsmeta="walls"
                  >
                    <span>{filterForSE("Tuesday", "20:00", true)}</span>
                    <h6>{filterForClass("Tuesday", "20:00", true)}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Wednesday", "20:00", true)
                        ? " hover-bg"
                        : "")
                    }
                  >
                    <span>{filterForSE("Wednesday", "20:00", true)}</span>
                    <h6>{filterForClass("Wednesday", "20:00", true)}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Thursday", "20:00", true)
                        ? " hover-bg"
                        : "")
                    }
                  >
                    <span>{filterForSE("Thursday", "20:00", true)}</span>
                    <h6>{filterForClass("Thursday", "20:00", true)}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Friday", "20:00", true) ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Friday", "20:00", true)}</span>
                    <h6>{filterForClass("Friday", "20:00", true)}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Saturday", "20:00", true)
                        ? " hover-bg"
                        : "")
                    }
                  >
                    <span>{filterForSE("Saturday", "20:00", true)}</span>
                    <h6>{filterForClass("Saturday", "20:00", true)}</h6>
                  </td>
                  <td
                    className={
                      "ts-item" +
                      (filterForSE("Sunday", "20:00", true) ? " hover-bg" : "")
                    }
                  >
                    <span>{filterForSE("Sunday", "20:00", true)}</span>
                    <h6>{filterForClass("Sunday", "20:00", true)}</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="getTouchContact">
        <GetTouch />
      </div>
      <Footer />
    </section>
  );
}
export default ClassesTable;
