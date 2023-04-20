import "./style.css";
import TrueWeightCalculator from "../WeightCalculatorScreen/TrueWeightCalculator";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./userData";
function Profile() {
  const { email } = useParams();
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    role: "User",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    imgURL: "",
    height: "",
    weight: "",
    max_squat: "",
    max_bench_press: "",
    max_deadlift: "",
  });
  const changeInfo = (info) => {
    setUser(info);
  };
  useEffect(() => {
    fetch(`https://localhost:7105/api/Account/GetUser/${email}`)
      .then((response) => response.json())
      .then((data) => changeInfo(data))
      .then((err) => alert(err.message));
  }, []);
  return (
    <section className="bg-dark persProfileSect">
      {/* <div class="container persProfileCont"> */}
      {/* <div class="row perProfileRow"> */}
      <div className="col-12 persProfCard ">
        <div className="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div className="card-body text-center pt-4">
            <img
              src={user.imgURL}
              alt="avatar"
              className="rounded-circle m-auto"
              width="300"
              height="300"
              style={{ border: "10px solid white" }}
            />
            <h5 className="my-3 pt-2 text-black fw-bold">
              {user.userName + " " + user.lastName}
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
            <hr />
            <div className="row" style={{ marginLeft: "8rem" }}>
              <div className="col-sm-5 ">
                <p className="mb-0 text-black fw-bold">Gender</p>
              </div>
              <div className="col-sm-7">
                <p className="mb-0" style={{ color: "white" }}>
                  {/* {user.gender} */}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">

            </div> */}
      </div>
      <div className="secondCol mt-5">
        <h2 className="bodyStatTitle fw-bold" style={{ color: "#f36100" }}>
          Body Stats
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ flex: "1 1 33.33%" }}>
            <div className="card mb-4 mb-md-0 cardBox">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold fs-5">
                    Height
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {user.height} cm
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 33.33%" }}>
            <div className="card mb-4 mb-md-0 cardBox">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    Weight
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {user.weight} Kg
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 33.33%" }}>
            <div className="card mb-4 mb-md-0 cardBox">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    BMI
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {(() => {
                    const weight = user.weight;
                    const height = user.height;
                    let bmi;
                    if (weight != 0 && height != 0) {
                      bmi = weight / (height * height * Math.pow(10, -4));
                    } else {
                      bmi = 0;
                    }

                    // return bmi.toFixed(0);
                    if (bmi < 18.5) {
                      return (
                        <p
                          className="fw-bold"
                          style={{ fontSize: "1rem", color: "#f36100" }}
                        >
                          {bmi.toFixed(0)}
                          <p
                            style={{
                              display: "inline",
                              float: "right",
                              fontSize: "1rem",
                              color: "#f36100",
                            }}
                          >
                            {bmi ? "Underweight" : ""}
                          </p>
                        </p>
                      );
                    } else if (bmi < 24.9) {
                      return (
                        <p
                          className="fw-bold"
                          style={{ fontSize: "1rem", color: "#f36100" }}
                        >
                          {bmi.toFixed(0)}
                          <p
                            style={{
                              display: "inline",
                              float: "right",
                              fontSize: "1rem",
                              color: "#f36100",
                            }}
                          >
                            Healthy
                          </p>
                        </p>
                      );
                    } else if (bmi < 29.9) {
                      return (
                        <p
                          className="fw-bold"
                          style={{ fontSize: "1rem", color: "#f36100" }}
                        >
                          {bmi.toFixed(0)}
                          <p
                            style={{
                              display: "inline",
                              float: "right",
                              fontSize: "1rem",
                              color: "#f36100",
                            }}
                          >
                            Overweight
                          </p>
                        </p>
                      );
                    } else {
                      return (
                        <p
                          className="fw-bold"
                          style={{ fontSize: "1rem", color: "#f36100" }}
                        >
                          {bmi.toFixed(0)}
                          <p
                            style={{
                              display: "inline",
                              float: "right",
                              fontSize: "1rem",
                              color: "#f36100",
                            }}
                          >
                            Obese
                          </p>
                        </p>
                      );
                    }
                  })()}
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    Current Max Squat:
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  Progress
                </p>
                <div
                  className="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value={user.max_squat}
                    style={{ backgroundColor: "#f36100" }}
                    className="w-100 mb-5"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    Current Max Bench Press:
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  Progress
                </p>
                <div
                  className="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value={user.max_bench_press}
                    style={{ backgroundColor: "#f36100" }}
                    className="w-100 mb-5"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-black font-italic me-1 fw-bold">
                    Current Max Deadlift:
                  </span>
                </p>
                <p
                  className="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  Progress
                </p>
                <div
                  className="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value={user.max_deadlift}
                    style={{ backgroundColor: "#f36100" }}
                    className="w-100 mb-5"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
