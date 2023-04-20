import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function TraineeEditForm() {
    const { email } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
      userName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
      height: "",
      weight: "",
      imgURL: "",
      max_squat: "",
      max_bench_press: "",
      max_deadlift: "",
    });
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
                <p className="mb-0" style={{ color: "white" }}>
                  {user.userName}
                </p>
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
                <p className="mb-0" style={{ color: "white" }}>
                  {user.lastName}
                </p>
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
                <p className="mb-0" style={{ color: "white" }}>
                  {user.email}
                </p>
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
                <p className="mb-0" style={{ color: "white" }}>
                  {user.phoneNumber}
                </p>
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
                <p className="mb-0" style={{ color: "white" }}>
                  {user.address}
                </p>
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
        {/* <div class="row">

            </div> */}
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
                <input
                  type="number"
                  placeholder="Height"
                  style={{ color: "#f36100" }}
                  value={user.height}
                  className="ps-3"
                  name="height"
                  onChange={handleChange}
                ></input>
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
                <input
                  type="number"
                  placeholder="Weight"
                  style={{ color: "#f36100" }}
                  value={user.weight}
                  className="ps-3"
                  name="weight"
                  onChange={handleChange}
                ></input>
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
                {/* <div
                  class="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                > */}
                    <input
                    type="number"
                    placeholder="Max Squat"
                    style={{ color: "#f36100" }}
                    value={user.max_squat}
                    className="ps-3"
                    name="max_squat"
                    onChange={handleChange}
                    ></input>
                  {/* <progress
                    min="0"
                    max={user.max_squat}
                    value="80"
                    style={{ backgroundColor: "#f36100" }}
                    class="w-100 mb-5"
                  ></progress> */}
                {/* </div> */}
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
                {/* <div
                  class="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                > */}
                    <input
                    type="number"
                    placeholder="Max Bench Press"
                    style={{ color: "#f36100" }}
                    value={user.max_bench_press}
                    className="ps-3"
                    name="max_bench_press"
                    onChange={handleChange}
                    ></input>
                  {/* <progress
                    min="0"
                    max="100"
                    value={user.max_bench_press}
                    style={{ backgroundColor: "#f36100" }}
                    class="w-100 mb-5"
                  ></progress> */}
                {/* </div> */}
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
                {/* <div
                  class="rounded"
                  style={{ height: "5px", backgroundColor: "#f36100" }}
                > */}
                    <input
                    type="number"
                    placeholder="Max DeadLift"
                    style={{ color: "#f36100" }}
                    value={user.max_deadlift}
                    className="ps-3"
                    name="max_deadlift"
                    onChange={handleChange}
                    ></input>
                  {/* <progress
                    min="0"
                    max="100"
                    value={user.max_deadlift}
                    style={{ backgroundColor: "#f36100" }}
                    class="w-100 mb-5"
                  ></progress> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraineeEditForm;
