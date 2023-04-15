import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrueWeightCalculator from "../WeightCalculatorScreen/TrueWeightCalculator";

const profileData = [
  {
    firstName: "John",
    lastName: "Smith",
    Email: "abc@example.com",
    Address: "Bay Area, San Francisco, CA",
    Phone: "(097) 234-5678",
    Height: "170",
    Weight: "70",
  },
];

function EditProfile() {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (event) => {
  //     event.preventDefault(); // prevent form submission
  //     // send data to server for processing, e.g. using fetch or Axios

  //     // Example fetch call to send data to server
  //     fetch("/api/saveEmail", {
  //     method: "POST",
  //     body: JSON.stringify({ email }),
  //     headers: { "Content-Type": "application/json" },
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //         // handle response from server, e.g. show success message
  //         console.log(data);
  //     })
  //     .catch((error) => {
  //         // handle error, e.g. show error message
  //         console.error(error);
  //     });
  // };

  return (
    <section className="bg-dark persProfileEditSect">
      {/* <div class="container persProfileCont"> */}
      {/* <div class="row perProfileRow"> */}
      <div class="col-12 persProfCard">
        <div class="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div class="card-body text-center pt-4">
            <img
              src="https://github.com/mdo.png"
              alt="avatar"
              class="rounded-circle img-fluid m-auto"
              style={{ width: "300px", border: "10px solid white" }}
            />
            <h5 class="my-3 pt-2 text-black fw-bold">
              {profileData[0].firstName} {profileData[0].lastName}
            </h5>
            <p class="text-black mb-4 fw-bold">{profileData[0].Address}</p>
          </div>
        </div>
        {/* </div>
          <div class="col-12"> */}
        <div
          class="card mb-4 cardEditDetails"
          style={{ backgroundColor: "#f36100" }}
        >
          <div class="card-body">
            <div class="row">
              <div class="col-sm-5">
                <p class="mb-0 text-black fw-bold text-end">First Name</p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your First Name"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-center"
                  style={{ marginLeft: "8.3rem" }}
                >
                  Last Name
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Last Name"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem" }}
                >
                  Email
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Email"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5">
                <p
                  class="mb-0 text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem", color: "black" }}
                >
                  Phone
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Phone"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                ></input>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-5 ">
                <p
                  class="text-black fw-bold text-left"
                  style={{ marginLeft: "8.4rem" }}
                >
                  Address
                </p>
              </div>
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Your Email"
                  style={{ color: "#f36100" }}
                  className="ps-3"
                ></input>
              </div>
            </div>
          </div>
          <div class="m-auto">
            <button class="btn" style={{ backgroundColor: "black" }}>
              <Link to="/profile">Save</Link>
            </button>
            <button class="btn" style={{ backgroundColor: "black" }}>
              <Link to="/profile">Cancel</Link>
            </button>
          </div>
        </div>
        {/* <div class="row">

            </div> */}
      </div>
      <div class="secondCol mt-5">
        <h2 class="bodyStatTitle fw-bold" style={{ color: "#f36100" }}>
          Body Stats
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ flex: "1 1 33.33%" }}>
            <div class="card mb-4 mb-md-0 cardBox">
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold fs-5">
                    Height
                  </span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {profileData[0].Height} cm
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 33.33%" }}>
            <div class="card mb-4 mb-md-0 cardBox">
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold">
                    Weight
                  </span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {profileData[0].Weight} Kg
                </p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div class="card mb-4 mb-md-0 cardBox">
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold">BMI</span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  {(() => {
                    const weight = profileData[0].Weight;
                    const height = profileData[0].Height;
                    const bmi = weight / (height * height * Math.pow(10, -4));
                    // return bmi.toFixed(0);
                    if (bmi < 18.5) {
                      return (
                        <p
                          class="fw-bold"
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
                            Underweight
                          </p>
                        </p>
                      );
                    } else if (bmi < 24.9) {
                      return (
                        <p
                          class="fw-bold"
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
                          class="fw-bold"
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
                          class="fw-bold"
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
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold">
                    Current Max Squat:
                  </span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  Progress
                </p>
                <div
                  class="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value="80"
                    style={{ backgroundColor: "#f36100" }}
                    class="w-100 mb-5"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold">
                    Current Max Bench Press:
                  </span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  Progress
                </p>
                <div
                  class="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value="80"
                    style={{ backgroundColor: "#f36100" }}
                    class="w-100 mb-5"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%" }}>
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4">
                  <span class="text-black font-italic me-1 fw-bold">
                    Current Max Deadlift:
                  </span>
                </p>
                <p
                  class="mb-1 fw-bold"
                  style={{ fontSize: "1rem", color: "#f36100" }}
                >
                  Progress
                </p>
                <div
                  class="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                >
                  <progress
                    min="0"
                    max="100"
                    value="80"
                    style={{ backgroundColor: "#f36100" }}
                    class="w-100 mb-5"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}

export default EditProfile;
