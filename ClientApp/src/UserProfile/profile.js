import "./style.css";
import TrueWeightCalculator from "../WeightCalculatorScreen/TrueWeightCalculator";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import avatar from "../Avatar";
import data from "./userData";
function Profile() {
  const { email, canEdit } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
    role: "User",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    gender: "",
    height: "",
    weight: "",
    max_squat: "",
    max_bench_press: "",
    max_deadlift: "",
    imgURL: "",
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
  const handleEdit = () => {
    navigate("/editprofile/" + email);
  };
  return (
    <section className="bg-dark vh-100 h-100 p-3">
      <div className="d-flex m-auto">
        <div className="col-12 persProfCard m-auto">
          <div
            className="card cardMain pt-2 mt-5"
            style={{ backgroundColor: "#f36100" }}
          >
            <div className="text-center">
              <img
                src={user.gender === "M" ? avatar["male"] : avatar["female"]}
                alt="avatar"
                className="rounded-circle m-auto"
                width="300"
                height="300"
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
        <div className="secondCol mt-5">
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
      </div>
    </section>
  );
}

export default Profile;
