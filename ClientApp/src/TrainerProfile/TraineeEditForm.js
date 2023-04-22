import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import avatar from "../Avatar";
function TraineeEditForm() {
  const { trainerEmail, traineeEmail } = useParams();
  const location = useLocation();
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
    fetch(`https://localhost:7105/api/Account/GetUser/${traineeEmail}`)
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
    fetch("https://localhost:7105/api/Account/" + traineeEmail, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((err) => alert(err));
    navigate("/traineeslisttrainer/" + trainerEmail);
  };
  const handleCancel = () => {
    navigate("/traineeslisttrainer/" + trainerEmail);
  };
  const handleEdit = () => {
    //navigate("/editprofile/" + email);
  };
  return (
    <section className="bg-dark vh-100 h-100">
      <div className="d-flex m-auto">
        <div className="col-12 persProfCard m-auto">
          <div
            className="card cardMain pt-2 mt-4"
            style={{ backgroundColor: "#f36100" }}
          >
            <div className="text-center">
              <img
                src={user.gender === "M" ? avatar["male"] : avatar["female"]}
                alt="avatar"
                class="rounded-circle m-auto"
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
        <div class="secondCol mt-3">
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
                      let bmi = 0;
                      if (height && weight && height !== 0)
                        bmi = weight / (height * height * Math.pow(10, -4));
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
                              {bmi === 0 ? "" : "Underweight"}
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
                  <input
                    type="number"
                    placeholder="Max Squat"
                    style={{ color: "#f36100" }}
                    value={user.max_squat}
                    className="ps-3"
                    name="max_squat"
                    onChange={handleChange}
                  ></input>
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
                  <input
                    type="number"
                    placeholder="Max Bench Press"
                    style={{ color: "#f36100" }}
                    value={user.max_bench_press}
                    className="ps-3"
                    name="max_bench_press"
                    onChange={handleChange}
                  ></input>
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
                  <input
                    type="number"
                    placeholder="Max DeadLift"
                    style={{ color: "#f36100" }}
                    value={user.max_deadlift}
                    className="ps-3"
                    name="max_deadlift"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TraineeEditForm;
