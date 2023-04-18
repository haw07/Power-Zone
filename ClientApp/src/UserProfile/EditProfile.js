import "./style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TrueWeightCalculator from "../WeightCalculatorScreen/TrueWeightCalculator";
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
  const { email } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://localhost:7105/api/Account/GetUser/${email}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((error) => alert(error));
  }, []);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSave = () => {
    fetch("https://localhost:7105/api/Account/" + email, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((err) => alert(err));
    navigate("/profile", {
      state: { email: email },
    });
  };
  const handleCancel = () => {
    navigate("/profile", {
      state: { email: email },
    });
  };
  return (
    <section className="bg-dark persProfileEditSect">
      {/* <div class="container persProfileCont"> */}
      {/* <div class="row perProfileRow"> */}
      <div class="col-12 persProfCard">
        <div class="card mainCard" style={{ backgroundColor: "#f36100" }}>
          <div class="card-body text-center pt-4">
            <img
              src={user.imgURL}
              alt="avatar"
              class="rounded-circle img-fluid m-auto"
              style={{ width: "300px", border: "10px solid white" }}
            />
            <h5 class="my-3 pt-2 text-black fw-bold">
              {user.userName + " " + user.lastName}
            </h5>
            <p class="text-black mb-4 fw-bold">{user.address}</p>
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
                  value={user.userName}
                  className="ps-3"
                  name="userName"
                  onChange={handleChange}
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
                  value={user.lastName}
                  className="ps-3"
                  name="lastName"
                  onChange={handleChange}
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
                  value={user.email}
                  style={{ color: "#f36100" }}
                  className="ps-3"
                  name="email"
                  onChange={handleChange}
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
                  value={user.phoneNumber}
                  className="ps-3"
                  name="phoneNumber"
                  onChange={handleChange}
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
                  value={user.address}
                  className="ps-3"
                  name="address"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div class="m-auto">
            <button
              type="button"
              class="btn"
              style={{ backgroundColor: "black" }}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              class="btn"
              style={{ backgroundColor: "black" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div class="secondCol mt-5">
        <h2 class="bodyStatTitle fw-bold" style={{ color: "#f36100" }}>
          Body Status
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
                  {user.height} cm
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
                  {user.weight} Kg
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
                    const weight = user.weight;
                    const height = user.height;
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
                    max={user.max_squat}
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
                    value={user.max_bench_press}
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
                    value={user.max_deadlift}
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
