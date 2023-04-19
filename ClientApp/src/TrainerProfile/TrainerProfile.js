import React, { useState, useEffect, useRef } from "react";
import TrainerData from "./TrainerData";
import trainees from "./trainees";
import { useParams } from "react-router-dom";
import { Dropdown, Table } from "react-bootstrap";
import "./style.css";

function TrainerProfile() {
  const [user, setUser] = useState([]);
  const [classes, setClasses] = useState([]);
  const { email } = useParams();
  useEffect(() => {
    fetch("https://localhost:7105/api/Account/GetUser/" + email)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => alert(err.message));
    fetch("https://localhost:7105/api/Account/" + email)
      .then((resp) => resp.json())
      .then((data) => setClasses(data))
      .catch((err) => alert(err.message));
  }, []);
  const day = new Date().getDay();
  let currentTime =
    (new Date().getHours() + 1) * 60 + (new Date().getMinutes() + 1);
  const getTime = (time) => {
    return parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3));
  };
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const getNextClass = (day) => {
    const todaysClasses = classes.filter((cl) => cl.day == days[day]);
    if (
      todaysClasses.length == 1 &&
      getTime(todaysClasses[0].startTime) > currentTime
    ) {
      return todaysClasses[0];
    } else if (
      todaysClasses.length == 1 &&
      getTime(todaysClasses[0].startTime) <= currentTime
    ) {
      if (day == 7) return getNextClass(0);
      else return getNextClass(day + 1);
    } else if (todaysClasses.length > 1) {
      let result = [];
      let time = 9000;
      for (let i = 0; i < todaysClasses.length; i++) {
        if (
          getTime(todaysClasses[i].startTime) > currentTime &&
          getTime(todaysClasses[i].startTime) < time
        ) {
          result = todaysClasses[i];
          time = getTime(todaysClasses[i].startTime);
        }
      }
      return result;
    } else {
      if (day == 7) return getNextClass(0);
      else {
        let i = day + 1;
        for (; i <= 6; i++) {
          return getNextClass(i);
        }
      }
    }
  };
  const nextClass = getNextClass(day);
  console.log(nextClass);
  return (
    <section className="bg-dark mainPart">
      <div className="d-flex">
        <div className="col-12 persProfCard ">
          <div className="card mainCard" style={{ backgroundColor: "#f36100" }}>
            <div className="card-body text-center pt-4">
              <img
                src="https://github.com/mdo.png"
                alt="avatar"
                className="rounded-circle img-fluid m-auto"
                style={{ width: "300px", border: "10px solid white" }}
              />
              <h5 className="my-3 pt-2 text-black fw-bold">
                {user.userName} {user.lastName}
              </h5>
              <p className="text-black mb-4 fw-bold">{user.address}</p>
            </div>
          </div>
          {/* </div>
          <div class="col-12"> */}
          <div
            className="card mb-4 cardDetails"
            style={{ backgroundColor: "#f36100" }}
          >
            <div className="card-body">
              <div className="row" style={{ marginLeft: "8rem" }}>
                <div className="col-sm-5">
                  <p className="mb-0 text-black fw-bold">First Name</p>
                </div>
                <div className="col-sm-7">
                  <p className="mb-0" style={{ color: "white" }}>
                    {user.userName}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row" style={{ marginLeft: "8rem" }}>
                <div className="col-sm-5">
                  <p className="mb-0 text-black fw-bold">Last Name</p>
                </div>
                <div className="col-sm-7">
                  <p className="mb-0" style={{ color: "white" }}>
                    {user.lastName}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row" style={{ marginLeft: "8rem" }}>
                <div className="col-sm-5">
                  <p className="mb-0 text-black fw-bold">Email</p>
                </div>
                <div className="col-sm-7">
                  <p className="mb-0" style={{ color: "white" }}>
                    {user.email}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row" style={{ marginLeft: "8rem" }}>
                <div className="col-sm-5">
                  <p className="mb-0 text-black fw-bold">Phone</p>
                </div>
                <div className="col-sm-7">
                  <p className="mb-0" style={{ color: "white" }}>
                    {user.phoneNumber}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row" style={{ marginLeft: "8rem" }}>
                <div className="col-sm-5 ">
                  <p className="mb-0 text-black fw-bold">Address</p>
                </div>
                <div className="col-sm-7">
                  <p className="mb-0" style={{ color: "white" }}>
                    {user.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondCol mt-5">
          <h2 className="bodyStatTitle fw-bold" style={{ color: "#f36100" }}>
            Main Info
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ flex: "1 1 33.33%" }}>
              <div className="card mb-4 mb-md-0 cardBox">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-black font-italic me-1 fw-bold fs-5">
                      Number of Classes
                    </span>
                  </p>
                  <p
                    className="mb-1 fw-bold"
                    style={{ fontSize: "1rem", color: "#f36100" }}
                  >
                    {user.classes?.length} classes
                  </p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 100%" }}>
              <div className="card mb-4 mb-md-0 cardBox">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-black font-italic me-1 fw-bold">
                      Number of Trainees
                    </span>
                  </p>
                  <p
                    className="mb-1 fw-bold"
                    style={{ fontSize: "1rem", color: "#f36100" }}
                  >
                    {user.trainees?.length}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 100%" }}>
              <div className="card mb-4 mb-md-0 cardBox">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-black font-italic me-1 fw-bold">
                      Next Class Name
                    </span>
                  </p>
                  <p
                    className="mb-1 fw-bold"
                    style={{ fontSize: "1rem", color: "#f36100" }}
                  >
                    {nextClass?.name}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 100%" }}>
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-black font-italic me-1 fw-bold">
                      Next Class Day
                    </span>
                  </p>
                  <p
                    className="mb-1 fw-bold"
                    style={{ fontSize: "1rem", color: "#f36100" }}
                  >
                    {}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 100%" }}>
              <div className="card mb-4 mb-md-0 cardBox">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-black font-italic me-1 fw-bold">
                      Next Class Time
                    </span>
                  </p>
                  <p
                    className="mb-1 fw-bold"
                    style={{ fontSize: "1rem", color: "#f36100" }}
                  >
                    {}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainerProfile;
