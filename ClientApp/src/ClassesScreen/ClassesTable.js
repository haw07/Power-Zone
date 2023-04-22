import "./Classes_style.css";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import GetTouch from "../Components/GetTouch";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function ClassesTable({ classes }) {
  const [data, setData] = useState(classes);
  useEffect(() => {
    document.getElementById("classes").style.color = "#e4381c";
    document.getElementById("wl").style.color = "white";
    document.getElementById("bb").style.color = "white";
    document.getElementById("box").style.color = "white";
    document.getElementById("kar").style.color = "white";
    document.getElementById("yog").style.color = "white";
  }, []);
  useEffect(() => {
    setData(classes);
  }, [classes]);
  const filter = (type, id) => {
    const ids = ["classes", "wl", "bb", "box", "kar", "yog"];
    let d = classes;
    if (type !== "all")
      d = classes.filter((cl) => {
        return cl.name === type;
      });
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] !== id) {
        document.getElementById(ids[i]).style.color = "white";
      }
    }
    document.getElementById(id).style.color = "#e4381c";
    setData(d);
  };
  //this function returns the expression that has the startTime and the endTime
  const filterForSE = (day, startTime, endTime) => {
    const d = data.filter((cl) => {
      return (
        cl.day === day && cl.startTime >= startTime && cl.endTime <= endTime
      );
    });
    //the there is a data
    if (d[0]) {
      return d[0]["startTime"] + " - " + d[0]["endTime"];
    } else return "";
  };
  //this function returns the expression that has the class type
  const filterForClass = (day, startTime, endTime) => {
    const d = data.filter((cl) => {
      return (
        cl.day === day && cl.startTime >= startTime && cl.endTime <= endTime
      );
    });
    //if there is a data
    if (d[0]) return d[0]["name"];
    else return "";
  };
  return (
    <section className="classtime-section class-time-table spad">
      <div>
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
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title">
                <h2>Classtime Table</h2>
              </div>
            </div>
          </div>
          <nav className="d-flex justify-around text-center mb-3 me-1 row">
            <a
              href="#"
              className="col-md-2"
              onClick={(e) => {
                e.preventDefault();
                filter("all", "classes");
              }}
              id="classes"
            >
              All Classes
            </a>
            <a
              className="col-md-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filter("weight loose", "wl");
              }}
              id="wl"
            >
              Weight loose
            </a>
            <a
              className="col-md-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filter("body building", "bb");
              }}
              id="bb"
            >
              Body Building
            </a>
            <a
              className="col-md-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filter("boxing", "box");
              }}
              id="box"
            >
              Boxing
            </a>
            <a
              className="col-md-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filter("Karate", "kar");
              }}
              id="kar"
            >
              Karate
            </a>
            <a
              className="col-md-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filter("yoga", "yog");
              }}
              id="yog"
            >
              Yoga
            </a>
          </nav>
          <div className="container row">
            <div className="classtime-table overflow-auto">
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
                        (filterForSE("Monday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Monday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Monday", "10:00", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Tuesday", "10:00", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Wednesday", "10:00", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Thursday", "10:00", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Friday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Friday", "10:00", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Saturday", "10:00", "14:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "10:00", "14:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "10:00", "14:00")}</span>
                      <h6>{filterForClass("Sunday", "10:00", "14:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">14:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Monday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Monday", "14:00", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Tuesday", "14:00", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Wednesday", "14:00", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Thursday", "14:00", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Friday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Friday", "14:00", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Saturday", "14:00", "16:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "14:00", "16:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "14:00", "16:00")}</span>
                      <h6>{filterForClass("Sunday", "14:00", "16:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">16:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Monday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Monday", "16:00", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Tuesday", "16:00", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Wednesday", "16:00", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Thursday", "16:00", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Friday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Friday", "16:00", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Saturday", "16:00", "18:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "16:00", "18:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "16:00", "18:00")}</span>
                      <h6>{filterForClass("Sunday", "16:00", "18:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">18:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Monday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Monday", "18:00", "20:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Tuesday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Tuesday", "18:00", "20:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Wednesday", "18:00", "20:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Thursday", "18:00", "20:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Friday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Friday", "18:00", "20:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Saturday", "18:00", "20:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "18:00", "20:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "18:00", "20:00")}</span>
                      <h6>{filterForClass("Sunday", "18:00", "20:00")}</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="workout-time">20:00</td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Monday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Monday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Monday", "20:00", "22:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Tuesday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                      data-tsmeta="walls"
                    >
                      <span>{filterForSE("Tuesday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Tuesday", "20:00", "22:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Wednesday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Wednesday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Wednesday", "20:00", "22:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Thursday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Thursday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Thursday", "20:00", "22:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Friday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Friday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Friday", "20:00", "22:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Saturday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Saturday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Saturday", "20:00", "22:00")}</h6>
                    </td>
                    <td
                      className={
                        "ts-item" +
                        (filterForSE("Sunday", "20:00", "22:00")
                          ? " hover-bg"
                          : "")
                      }
                    >
                      <span>{filterForSE("Sunday", "20:00", "22:00")}</span>
                      <h6>{filterForClass("Sunday", "20:00", "22:00")}</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
