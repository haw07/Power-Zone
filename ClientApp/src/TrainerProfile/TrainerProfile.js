import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import avatar from "../Avatar";
function TrainerProfile() {
  const [user, setUser] = useState([]);
  const [classes, setClasses] = useState([]);
  const { email, canEdit } = useParams();
  const navigate = useNavigate();
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
  const getClassWithHighestTime = (classes) => {
    let result = {};
    for (let i = 0; i < classes.length - 1; i++) {
      if (getTime(classes[i].startTime) > getTime(classes[i + 1].startTime)) {
        result = classes[i];
      } else {
        result = classes[i + 1];
      }
    }
    return result;
  };
  const workingDays = () => {
    let count = 0;
    for (let i = 0; i < 7; i++) {
      const todaysClasses = classes.filter((cl) => cl.day == days[i]);
      if (todaysClasses.length > 0) {
        count++;
      }
    }
  };
  const getNextClassHelper = (today, day) => {
    const todaysClasses = classes.filter((cl) => cl.day == days[day]);
    let cl = {};
    if (todaysClasses.length !== 0) cl = getClassWithHighestTime(todaysClasses);
    if (todaysClasses.length == 1) {
      return todaysClasses[0];
    } else if (todaysClasses.length > 1) {
      let result = {};
      let time = 9000;
      for (let i = 0; i < todaysClasses.length; i++) {
        if (
          (workingDays() > 1 &&
          today === day &&
          currentTime > getTime(cl?.startTime)
            ? getTime(todaysClasses[i].startTime) < currentTime
            : getTime(todaysClasses[i].startTime) > currentTime) &&
          getTime(todaysClasses[i].startTime) < time
        ) {
          result = todaysClasses[i];
          time = getTime(todaysClasses[i].startTime);
        } else if (today !== day) {
          if (getTime(todaysClasses[i].startTime) < time) {
            result = todaysClasses[i];
            time = getTime(todaysClasses[i].startTime);
          }
        }
      }
      if (Object.keys(result).length !== 0) {
        return result;
      } else return {};
    } else {
      return {};
    }
  };
  const getNextClass = (day) => {
    let finalResult = {};
    let Day = day;
    let daysLoopedOver = 0;
    let flag = false;
    let result;
    while (
      Object.keys(finalResult).length === 0 &&
      daysLoopedOver <= 6 &&
      !flag
    ) {
      if (Day === 6) flag = true;
      result = getNextClassHelper(day, Day);
      daysLoopedOver++;
      Day++;
      if (Object.keys(result).length !== 0) finalResult = result;
    }
    if (flag && Object.keys(finalResult).length === 0) {
      let today = 0;
      while (daysLoopedOver <= 6 && Object.keys(finalResult).length === 0) {
        result = getNextClassHelper(day, today);
        daysLoopedOver++;
        today++;
        if (Object.keys(result).length !== 0) finalResult = result;
      }
    }
    return finalResult;
  };
  const nextClass = getNextClass(day);
  const handleEdit = () => {
    navigate("/editprofilet/" + email);
  };
  return (
    <section className="bg-dark vh-100 h-100 p-5">
      <div className="d-flex m-auto p-4">
        <div className="col-12 persProfCard m-auto">
          <div
            className="card cardMain pt-2"
            style={{ backgroundColor: "#f36100" }}
          >
            <div className="text-center">
              <img
                src={user.gender === "M" ? avatar["male"] : avatar["female"]}
                alt="avatar"
                className="rounded-circle d-block m-auto"
                height="300"
                width="300"
              />
              <div className="mt-3">
                <h5 className="text-black mb-3">
                  {user.userName + " " + user.lastName}
                </h5>
                <h5 className="text-black mb-3">{user.address}</h5>
                <h5 className="text-black mb-3">{user.phoneNumber}</h5>
                <h5 className="text-black mb-3">{user.email}</h5>
              </div>
              {canEdit === "true" ? (
                <div>
                  <button
                    type="button"
                    className="btn bg-white mb-3 w-75"
                    style={{ color: "#f36100", border: "2px solid white" }}
                    onClick={handleEdit}
                  >
                    Edit Profile
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="secondCol">
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
                    {nextClass?.day}
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
                    {nextClass?.startTime}
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
